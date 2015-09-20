/*
 * Serve JSON to our AngularJS client
 */

var _       = require('lodash')
var request = require('request')

// GET
exports.votes = function (req, res) {
  var postalCode = req.params.postalCode.toUpperCase()

  var returnObject = {}

  request('https://openparliament.ca/search/?q=' + postalCode, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var uri = response.request.uri
      var politicianURL = uri.protocol + '//api.' + uri.hostname + uri.path
      var politicianKebabName = uri.path.match(/\/politicians\/(.+)\//)[1]


      request(politicianURL, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          returnObject.MP = body

          var ballotURL = 'http://api.openparliament.ca/votes/ballots/?politician=' + politicianKebabName

          request(ballotURL, function(error, response, body) {
            if (!error && response.statusCode == 200) {
              returnObject.ballots = []

              _.each(JSON.parse(body).objects, function(ballot) {
                var voteURL = 'http://api.openparliament.ca' + ballot.vote_url

                request(voteURL, function(error, response, body) {
                  if (!error && response.statusCode == 200) {
                    ballot.vote = body
                    returnObject.ballots.push(ballot)

                    var billURL = 'http://api.openparliament.ca' + JSON.parse(body).bill_url
                    request(billURL, function(error,response, body) {
                      if (!error && response.statusCode == 200) {
                        ballot.bill = body

                        if(returnObject.ballots[19].bill) {
                          res.json(returnObject)
                        }
                      }
                    })
                  }
                })
              })
            }
          })
        }
      })
    }
  })
};