/*
 * Serve JSON to our AngularJS client
 */

var request = require('request')

// GET
exports.votes = function (req, res) {
  var postalCode = req.params.postalCode

  request('https://represent.opennorth.ca/postcodes/L5V2S8/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
      res.json(body);
    }
  })

  // find mp
  // get votes
  // return as json
};