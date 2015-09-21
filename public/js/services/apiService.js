function ApiService($http) {

	this.http = $http;
	this.hello; 
	this.mp = MP_DATA;

}


angular.module('vote').service('api', ApiService);

ApiService.prototype.requestVotes = function(postal_code) {
	
	var self = this;

	console.log(postal_code);

	return self.http.get('/api/votes/' + postal_code)
	.then(function(response) {
		console.log('successful votes call');
		console.log(response.data);
		return response.data;
	})
	.catch(function(response) {
		console.log('unsuccessful votes call');
	});
};


ApiService.prototype.getMPData = function () {
	return this.mp; 
}

var MP_DATA = {  
   "mpInfo":{  
      "fax":"1 613 992-3921",
      "links":[  
         {  
            "url":"http://www.parl.gc.ca/MembersOfParliament/ProfileMP.aspx?Key=200211&Language=E",
            "note":"Page on parl.gc.ca"
         },
         {  
            "url":"http://www.johnmccallum.ca",
            "note":"Official site"
         }
      ],
      "image":"/media/polpics/191_1.jpg",
      "other_info":{  
         "wikipedia_id":[  
            "440981"
         ],
         "twitter":[  
            "JohnMcCallumLPC"
         ],
         "parlinfo_id":[  
            "826dc268-dbda-48fa-ae4a-eefebd5716e1"
         ],
         "favourite_word":[  
            "liberal"
         ],
         "twitter_id":[  
            "233561717"
         ],
         "wordcloud":[  
            "autoimg/wordcloud-pol/john-mccallum.png"
         ],
         "parl_id":[  
            "128481",
            "78387",
            "170090",
            "82481",
            "82322",
            "99484",
            "99460",
            "116375",
            "118629",
            "129734",
            "143707",
            "149902",
            "162766",
            "20701",
            "171142",
            "173650",
            "170993",
            "189015",
            "186583",
            "186572",
            "198668",
            "197210",
            "203457",
            "200211"
         ],
         "freebase_id":[  
            "/en/john_mccallum"
         ],
         "constituency_offices":[  
            "7750 Birchmount Road\nUnit 21-22\nMarkham ON  L3R 0B4\nPhone: 1 905 479-8100"
         ],
         "alternate_name":[  
            "john mccallum",
            "the honourable john mccallum"
         ]
      },
      "related":{  
         "speeches_url":"/speeches/?politician=john-mccallum",
         "ballots_url":"/votes/ballots/?politician=john-mccallum",
         "sponsored_bills_url":"/bills/?sponsor_politician=john-mccallum",
         "activity_rss_url":"/politicians/191/rss/activity/"
      },
      "family_name":"McCallum",
      "name":"John McCallum",
      "url":"/politicians/john-mccallum/",
      "gender":"male",
      "memberships":[  
         {  
            "end_date":null,
            "riding":{  
               "province":"ON",
               "name":{  
                  "en":"Markham—Unionville"
               },
               "id":35045
            },
            "url":"/politicians/memberships/1387/",
            "party":{  
               "name":{  
                  "en":"Liberal Party of Canada"
               },
               "short_name":{  
                  "en":"Liberal"
               }
            },
            "start_date":"2004-10-04",
            "label":{  
               "en":"Liberal MP for Markham—Unionville"
            }
         },
         {  
            "end_date":"2004-05-23",
            "riding":{  
               "province":"ON",
               "name":{  
                  "en":"Markham"
               },
               "id":null
            },
            "url":"/politicians/memberships/1692/",
            "party":{  
               "name":{  
                  "en":"Liberal Party of Canada"
               },
               "short_name":{  
                  "en":"Liberal"
               }
            },
            "start_date":"2001-01-29",
            "label":{  
               "en":"Liberal MP for Markham"
            }
         }
      ],
      "given_name":"John",
      "voice":"1 613 996-3374",
      "email":"john.mccallum@parl.gc.ca"
   },
   "mpBallots":[  
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/464/",
         "vote":{  
            "description":{  
               "fr":"Que le 21e rapport du Comité permanent de la procédure et des affaires de la Chambre, présenté le vendredi 3 octobre 2014, soit agréé.",
               "en":"That the 21st Report of the Standing Committee on Procedure and House Affairs, presented on Friday, October 3, 2014, be concurred in."
            },
            "nay_total":97,
            "url":"/votes/41-2/464/",
            "party_votes":[  
               {  
                  "vote":"Free vote",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0.5
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0.0303030303030303
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Free vote",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0.182926829268293
               },
               {  
                  "vote":"Free vote",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0.188811188811189
               }
            ],
            "yea_total":169,
            "paired_total":0,
            "number":464,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F464%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-17",
            "context_statement":"/debates/2015/6/17/procedural-14/",
            "bill_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/465/",
         "vote":{  
            "description":{  
               "fr":"Que la motion soit modifiée par substitution, aux mots suivant le mot « Que »,  de ce qui suit :     \n\n« cette Chambre refuse de donner troisième lecture au projet de loi S-4, Loi modifiant la Loi sur la protection des renseignements personnels et les documents électroniques et une autre loi en conséquence, parce qu’il :     \n\n            a) menace le régime de protection de la vie privée des Canadiens en autorisant la communication volontaire entre organismes des renseignements personnels les concernant à l’insu des intéressés et sans leur consentement;\n\n            b) omet d’éliminer les échappatoires du régime de protection de la vie privée qui permettent l’échange de renseignements personnels par des moyens détournés entre fournisseurs de services Internet et organismes gouvernementaux;\n\n            c) omet de mettre en place un mécanisme de supervision pour garantir que les communications volontaires ne soient faites que dans des circonstances extrêmes;\n\n            d) ne confère pas au Commissaire à la protection de la vie privée du Canada des pouvoirs adéquats de rendre des ordonnances afin de faire respecter le régime de protection de la vie privée; \n\n          e) propose un mécanisme de déclaration obligatoire des atteintes à la sécurité des données qui conduira probablement au non-signalement de telles atteintes. ».",
               "en":"That the motion be amended by deleting all the words after the word “That” and substituting the following:     \n\n“this House decline to give third reading to Bill S-4, An Act to amend the Personal Information Protection and Electronic Documents Act and to make a consequential amendment to another Act, because it:     \n\n(     a) threatens the privacy protections of Canadians by allowing for the voluntary disclosure of their personal information among organizations without the knowledge or consent of the individuals affected;\n\n(     b) fails to eliminate loopholes in privacy law that allow the backdoor sharing of personal information between Internet service providers and government agencies;\n\n(     c) fails to put in place a supervision mechanism to ensure that voluntary disclosures are made only in extreme circumstances;\n\n(     d) does not give the Privacy Commissioner of Canada adequate order-making powers to enforce compliance with privacy law; and\n\n(   e) proposes a mandatory data-breach reporting mechanism that will likely result in under-reporting of breaches.”."
            },
            "nay_total":141,
            "url":"/votes/41-2/465/",
            "party_votes":[  
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":105,
            "paired_total":0,
            "number":465,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F465%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Failed",
            "date":"2015-06-18",
            "context_statement":"/debates/2015/6/18/procedural-3/",
            "bill_url":"/bills/41-2/S-4/"
         },
         "bill":{  
            "status":{  
               "en":"Law (royal assent given)"
            },
            "status_code":"RoyalAssentGiven",
            "text_url":"http://parl.gc.ca/HousePublications/Publication.aspx?Language=E&Mode=1&DocId=8057593",
            "number":"S-4",
            "related":{  
               "bills_url":"/bills/"
            },
            "other_session_urls":[  

            ],
            "session":"41-2",
            "private_member_bill":false,
            "law":true,
            "sponsor_politician_membership_url":null,
            "home_chamber":"Senate",
            "name":{  
               "fr":"Loi modifiant la Loi sur la protection des renseignements personnels et les documents électroniques et une autre loi en conséquence",
               "en":"An Act to amend the Personal Information Protection and Electronic Documents Act and to make a consequential amendment to another Act"
            },
            "vote_urls":[  
               "/votes/41-2/466/",
               "/votes/41-2/465/",
               "/votes/41-2/413/",
               "/votes/41-2/412/",
               "/votes/41-2/411/",
               "/votes/41-2/409/"
            ],
            "short_title":{  
               "fr":"Loi sur la protection des renseignements personnels numériques",
               "en":"Digital Privacy Act"
            },
            "url":"/bills/41-2/S-4/",
            "legisinfo_url":"http://www.parl.gc.ca/LEGISINFO/BillDetails.aspx?Language=E&Mode=1&billId=6524311",
            "introduced":"2014-04-08",
            "legisinfo_id":6524311,
            "sponsor_politician_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/463/",
         "vote":{  
            "description":{  
               "fr":"Que, de l’avis de la Chambre :    a) le taux de chômage que connaît le Canada depuis la récession de 2008 demeure élevé; b) la qualité de l’emploi au Canada atteint son plus bas niveau depuis 25 ans; c) le gouvernement devrait réorienter sa politique économique pour soutenir la classe moyenne en aidant les propriétaires de petites entreprises et le secteur manufacturier à créer des emplois (i) en réduisant immédiatement le taux d’imposition sur les PME de 1% et d’un point supplémentaire dès que les finances le permettront, (ii) en établissant un crédit d’impôt pour l’innovation, (iii) en prolongeant la déduction pour amortissement accéléré afin de créer de bons emplois pour la classe moyenne, (iv) en collaborant avec les provinces, les territoires et les Premières nations afin de former les Canadiens pour occuper des emplois bien rémunérés.",
               "en":"That, in the opinion of the House: (   a) the unemployment rate in Canada has remained high since the 2008 recession; (b) the quality of the Canadian job market has reached a 25-year low; (c) the government should redesign its economic policy to support the middle class and help small-business owners and the manufacturing sector to create new jobs by (i) immediately lowering the small- and medium-sized business tax rate by 1% and by another percentage point when finances permit, (ii) establishing an innovation tax credit, (iii) extending the accelerated capital cost allowance in order to create good middle-class jobs, (iv) working with the provinces, territories and First Nations to train Canadians to occupy well-paid jobs."
            },
            "nay_total":145,
            "url":"/votes/41-2/463/",
            "party_votes":[  
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":127,
            "paired_total":0,
            "number":463,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F463%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Failed",
            "date":"2015-06-17",
            "context_statement":"/debates/2015/6/17/procedural-12/",
            "bill_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"No",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/462/",
         "vote":{  
            "description":{  
               "fr":"motion des voies et moyens en vue de modifier la Loi de l'impôt sur le revenu.",
               "en":"Ways and Means motion to amend the Income Tax Act."
            },
            "nay_total":126,
            "url":"/votes/41-2/462/",
            "party_votes":[  
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":149,
            "paired_total":0,
            "number":462,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F462%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-17",
            "context_statement":"/debates/2015/6/17/procedural-10/",
            "bill_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"No",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/467/",
         "vote":{  
            "description":{  
               "fr":"Que le projet de loi soit maintenant lu une troisième fois et adopté.",
               "en":"That the Bill be now read a third time and do pass."
            },
            "nay_total":104,
            "url":"/votes/41-2/467/",
            "party_votes":[  
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":141,
            "paired_total":0,
            "number":467,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F467%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-18",
            "context_statement":"/debates/2015/6/18/procedural-6/",
            "bill_url":"/bills/41-2/S-2/"
         },
         "bill":{  
            "status":{  
               "en":"Law (royal assent given)"
            },
            "status_code":"RoyalAssentGiven",
            "text_url":"http://parl.gc.ca/HousePublications/Publication.aspx?Language=E&Mode=1&DocId=8057181",
            "number":"S-2",
            "related":{  
               "bills_url":"/bills/"
            },
            "other_session_urls":[  

            ],
            "session":"41-2",
            "private_member_bill":false,
            "law":true,
            "sponsor_politician_membership_url":null,
            "home_chamber":"Senate",
            "name":{  
               "fr":"Loi modifiant la Loi sur les textes réglementaires et le Règlement sur les textes réglementaires en conséquence",
               "en":"An Act to amend the Statutory Instruments Act and to make consequential amendments to the Statutory Instruments Regulations"
            },
            "vote_urls":[  
               "/votes/41-2/467/",
               "/votes/41-2/453/",
               "/votes/41-2/452/"
            ],
            "short_title":{  
               "fr":"Loi sur l’incorporation par renvoi dans les règlements",
               "en":"Incorporation by Reference in Regulations Act"
            },
            "url":"/bills/41-2/S-2/",
            "legisinfo_url":"http://www.parl.gc.ca/LEGISINFO/BillDetails.aspx?Language=E&Mode=1&billId=6262288",
            "introduced":"2013-10-22",
            "legisinfo_id":6262288,
            "sponsor_politician_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/460/",
         "vote":{  
            "description":{  
               "fr":"Que, de l'avis de la Chambre, la tragédie injuste que représentent le meurtre et la disparition de femmes et de jeunes filles autochtones revêt une importance cruciale aux yeux de tous les Canadiens; que le gouvernement n’est pas parvenu à rendre justice aux victimes, à atténuer la douleur des familles ni à mettre fin à la violence; que la Chambre exhorte le gouvernement à agir dès maintenant pour régler ce problème systémique et à mettre sur pied une commission d’enquête publique.",
               "en":"That, in the opinion of the House, the tragic and inequitable issue of missing and murdered Aboriginal women and girls is of critical importance for all Canadians; that the government has failed to provide justice for the victims, healing for the families, or an end to the violence; and that the House call on the government to take immediate action to deal with this systemic problem and call a public inquiry."
            },
            "nay_total":147,
            "url":"/votes/41-2/460/",
            "party_votes":[  
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":129,
            "paired_total":0,
            "number":460,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F460%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Failed",
            "date":"2015-06-17",
            "context_statement":"/debates/2015/6/17/procedural-8/",
            "bill_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/452/",
         "vote":{  
            "description":{  
               "fr":"",
               "en":""
            },
            "nay_total":151,
            "url":"/votes/41-2/452/",
            "party_votes":[  
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":115,
            "paired_total":0,
            "number":452,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F452%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Failed",
            "date":"2015-06-15",
            "context_statement":"/debates/2015/6/15/procedural-31/",
            "bill_url":"/bills/41-2/S-2/"
         },
         "bill":{  
            "status":{  
               "en":"Law (royal assent given)"
            },
            "status_code":"RoyalAssentGiven",
            "text_url":"http://parl.gc.ca/HousePublications/Publication.aspx?Language=E&Mode=1&DocId=8057181",
            "number":"S-2",
            "related":{  
               "bills_url":"/bills/"
            },
            "other_session_urls":[  

            ],
            "session":"41-2",
            "private_member_bill":false,
            "law":true,
            "sponsor_politician_membership_url":null,
            "home_chamber":"Senate",
            "name":{  
               "fr":"Loi modifiant la Loi sur les textes réglementaires et le Règlement sur les textes réglementaires en conséquence",
               "en":"An Act to amend the Statutory Instruments Act and to make consequential amendments to the Statutory Instruments Regulations"
            },
            "vote_urls":[  
               "/votes/41-2/467/",
               "/votes/41-2/453/",
               "/votes/41-2/452/"
            ],
            "short_title":{  
               "fr":"Loi sur l’incorporation par renvoi dans les règlements",
               "en":"Incorporation by Reference in Regulations Act"
            },
            "url":"/bills/41-2/S-2/",
            "legisinfo_url":"http://www.parl.gc.ca/LEGISINFO/BillDetails.aspx?Language=E&Mode=1&billId=6262288",
            "introduced":"2013-10-22",
            "legisinfo_id":6262288,
            "sponsor_politician_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/457/",
         "vote":{  
            "description":{  
               "fr":"Que, de l’avis de la Chambre, le gouvernement devrait, tout en respectant les compétences provinciales et territoriales, continuer à prendre les mesures nécessaires afin de prévenir la maladie d’Alzheimer et les autres démences et de réduire les effets de la démence pour les personnes qui en sont atteintes, ainsi que pour leurs familles et leurs aidants, en continuant d’axer les efforts sur :    a) la prise en charge d’un leadership adapté au rôle du gouvernement fédéral de manière à favoriser une approche collaborative et coordonnée avec les provinces et les territoires afin d’élaborer une stratégie pancanadienne en matière de démence, comme les ministres fédéral-provinciaux-territoriaux de la Santé l’ont convenu lors de leur dernière réunion; b) les partenariats au Canada et à l’échelle internationale, y compris les engagements avec les partenaires du G7 et le travail entrepris lors de l’événement mondial « Héritage » sur la démence, organisé conjointement par le Canada et la France, afin d’accélérer la découverte et l’élaboration d’approches pour la prévention, le diagnostic précoce, le retardement de l’apparition et le traitement de la démence; c) l’éducation et la sensibilisation afin de réduire la stigmatisation associée à la démence, y compris la mise sur pied de l’initiative Amis Alzheimer; d) la recherche sur la démence axée principalement sur la prévention primaire, la prévention secondaire et la qualité de vie, y compris les initiatives décrites dans le Plan national de recherche et de prévention concernant la démence; e) la promotion de la mise en commun des pratiques exemplaires parmi toutes les administrations afin de favoriser la connaissance des traitements et services prometteurs; f) la poursuite du travail de collaboration avec les intervenants concernés, y compris les familles touchées par la démence, et la direction de groupes nationaux tels que la Société Alzheimer du Canada et le Consortium canadien en neurodégénérescence associée au vieillissement; g) l’inclusion complète de tous les Canadiens atteints de démence, sans égard à l’âge, dans la mise en œuvre des mesures ci-dessus; h) le maintien du soutien, par des systèmes de surveillance nationaux, pour la cueillette des données sur les principaux aspects de la maladie d’Alzheimer et les autres démences, en vue d’orienter l’analyse et la prise de décision fondées la connaissance; i) la communication des progrès aux Canadiens.",
               "en":"That, in the opinion of the House, the government should, while respecting provincial and territorial jurisdiction, continue to take the necessary measures to prevent Alzheimer's disease and other dementias and to reduce the impact of dementia for those living with this disease, as well as for their families and caregivers, by continuing to focus on: (   a) taking leadership appropriate to the federal role that will encourage a collaborative and coordinated approach with the provinces and territories to develop a pan-Canadian strategy for dementia, as agreed to at the recent federal-provincial-territorial Health Ministers' meeting; (b) partnerships within Canada and internationally, including commitments with G7 partners, and the work initiated at the 2014 Canada-France Global Dementia Legacy Summit, to accelerate the discovery and development of approaches for the prevention, early diagnosis, delay of onset, and treatment of dementia; (c) education and awareness to reduce the stigma associated with dementia, including the implementation of the Dementia Friends Canada initiative; (d) dementia research with a focus on primary prevention, secondary prevention, and quality of life, including those initiatives outlined in the National Dementia Research and Prevention Plan; (e) promoting the sharing of best practices among all jurisdictions to ensure awareness of promising treatments and services; (f) continuing to work in partnership with relevant stakeholders, including families affected by dementia and leading national groups such as the Alzheimer Society of Canada and the Canadian Consortium on Neurodegeneration in Aging; (g) ensuring the full inclusion of all Canadians living with dementia, regardless of age, when acting on the above; (h) continuing to support, through national surveillance systems, the collection of data on key aspects of Alzheimer's disease and other dementias in order to inform evidence-based analysis and policy-making; and (i) keeping Canadians informed as progress is made."
            },
            "nay_total":0,
            "url":"/votes/41-2/457/",
            "party_votes":[  
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":277,
            "paired_total":0,
            "number":457,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F457%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-17",
            "context_statement":"/debates/2015/6/17/procedural-2/",
            "bill_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"No",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/466/",
         "vote":{  
            "description":{  
               "fr":"Que le projet de loi soit maintenant lu une troisième fois et adopté.",
               "en":"That the Bill be now read a third time and do pass."
            },
            "nay_total":105,
            "url":"/votes/41-2/466/",
            "party_votes":[  
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":141,
            "paired_total":0,
            "number":466,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F466%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-18",
            "context_statement":"/debates/2015/6/18/procedural-4/",
            "bill_url":"/bills/41-2/S-4/"
         },
         "bill":{  
            "status":{  
               "en":"Law (royal assent given)"
            },
            "status_code":"RoyalAssentGiven",
            "text_url":"http://parl.gc.ca/HousePublications/Publication.aspx?Language=E&Mode=1&DocId=8057593",
            "number":"S-4",
            "related":{  
               "bills_url":"/bills/"
            },
            "other_session_urls":[  

            ],
            "session":"41-2",
            "private_member_bill":false,
            "law":true,
            "sponsor_politician_membership_url":null,
            "home_chamber":"Senate",
            "name":{  
               "fr":"Loi modifiant la Loi sur la protection des renseignements personnels et les documents électroniques et une autre loi en conséquence",
               "en":"An Act to amend the Personal Information Protection and Electronic Documents Act and to make a consequential amendment to another Act"
            },
            "vote_urls":[  
               "/votes/41-2/466/",
               "/votes/41-2/465/",
               "/votes/41-2/413/",
               "/votes/41-2/412/",
               "/votes/41-2/411/",
               "/votes/41-2/409/"
            ],
            "short_title":{  
               "fr":"Loi sur la protection des renseignements personnels numériques",
               "en":"Digital Privacy Act"
            },
            "url":"/bills/41-2/S-4/",
            "legisinfo_url":"http://www.parl.gc.ca/LEGISINFO/BillDetails.aspx?Language=E&Mode=1&billId=6524311",
            "introduced":"2014-04-08",
            "legisinfo_id":6524311,
            "sponsor_politician_url":null
         }
      },
      {  
         "politician_membership_url":"/politicians/memberships/1387/",
         "ballot":"Yes",
         "politician_url":"/politicians/john-mccallum/",
         "vote_url":"/votes/41-2/456/",
         "vote":{  
            "description":{  
               "fr":"Que le projet de loi soit maintenant lu une troisième fois et adopté.",
               "en":"That the Bill be now read a third time and do pass."
            },
            "nay_total":86,
            "url":"/votes/41-2/456/",
            "party_votes":[  
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"Green Party of Canada"
                     },
                     "short_name":{  
                        "en":"Green"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Forces et Démocratie"
                     },
                     "short_name":{  
                        "en":"Forces et Démocratie"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Liberal Party of Canada"
                     },
                     "short_name":{  
                        "en":"Liberal"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Didn't vote",
                  "party":{  
                     "name":{  
                        "en":"Bloc Québécois"
                     },
                     "short_name":{  
                        "en":"Bloc"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"No",
                  "party":{  
                     "name":{  
                        "en":"New Democratic Party"
                     },
                     "short_name":{  
                        "en":"NDP"
                     }
                  },
                  "disagreement":0
               },
               {  
                  "vote":"Yes",
                  "party":{  
                     "name":{  
                        "en":"Conservative Party of Canada"
                     },
                     "short_name":{  
                        "en":"Conservative"
                     }
                  },
                  "disagreement":0
               }
            ],
            "yea_total":185,
            "paired_total":0,
            "number":456,
            "related":{  
               "ballots_url":"/votes/ballots/?vote=%2Fvotes%2F41-2%2F456%2F",
               "votes_url":"/votes/"
            },
            "session":"41-2",
            "result":"Passed",
            "date":"2015-06-16",
            "context_statement":"/debates/2015/6/16/procedural-24/",
            "bill_url":"/bills/41-2/S-7/"
         },
         "bill":{  
            "status":{  
               "en":"Law (royal assent given)"
            },
            "status_code":"RoyalAssentGiven",
            "text_url":"http://parl.gc.ca/HousePublications/Publication.aspx?Language=E&Mode=1&DocId=8057595",
            "number":"S-7",
            "related":{  
               "bills_url":"/bills/"
            },
            "other_session_urls":[  

            ],
            "session":"41-2",
            "private_member_bill":false,
            "law":true,
            "sponsor_politician_membership_url":null,
            "home_chamber":"Senate",
            "name":{  
               "fr":"Loi modifiant la Loi sur l’immigration et la protection des réfugiés, la Loi sur le mariage civil, le Code criminel et d’autres lois en conséquence",
               "en":"An Act to amend the Immigration and Refugee Protection Act, the Civil Marriage Act and the Criminal Code and to make consequential amendments to other Acts"
            },
            "vote_urls":[  
               "/votes/41-2/456/",
               "/votes/41-2/455/",
               "/votes/41-2/454/",
               "/votes/41-2/435/",
               "/votes/41-2/352/"
            ],
            "short_title":{  
               "fr":"Loi sur la tolérance zéro face aux pratiques culturelles barbares",
               "en":"Zero Tolerance for Barbaric Cultural Practices Act"
            },
            "url":"/bills/41-2/S-7/",
            "legisinfo_url":"http://www.parl.gc.ca/LEGISINFO/BillDetails.aspx?Language=E&Mode=1&billId=6761928",
            "introduced":"2014-11-05",
            "legisinfo_id":6761928,
            "sponsor_politician_url":null
         }
      }
   ]
}





