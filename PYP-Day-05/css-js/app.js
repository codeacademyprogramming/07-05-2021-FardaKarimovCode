class Customers { 
  async getProducts(){
    try{
    let tableData = await fetch("data.json");
    let customers=tableData.json();
    return customers; 
    }catch(error){
      console.log(errors)
    }
  }
}
window.addEventListener("DOMContentLoaded",()=>{
var product=new Customers();
product.getProducts().then(data=>console.log(data))
start();
});

var tableData = [
  {
 "img": "john_martin.jpg","id" : 0,"name": "Ted","loans": [{"amount": {"value": 13000,"currency": "AZN"},"closed":false,"loaner": "PASHA Bank","period": {"type": "month","value": 36},"perMonth": {"value": 611.84,"currency": "AZN" },"dueAmount": {"value": 4200,"currency": "AZN"},"loanPeriod": {"end": "22.01.2022","start": "22.01.2019"},"interestRate": 18},{"amount": {"value": 5000,"currency": "AZN"},"closed": false,"loaner": "TBC","period": {"type": "month","value": 12},"perMonth": {"value": 416.66,"currency": "AZN"},"dueAmount": {"value": 2916,"currency": "AZN"},"loanPeriod": {"end": "03.01.2022","start": "03.01.2021"
}, "interestRate": 22},{"amount": { "value": 8500, "currency": "AZN"
},"closed": true,"loaner": "Revolut","period": {"type": "month", "value": 24
},"perMonth": {"value": 154.25,"currency": "AZN"},"dueAmount": {"value": 151.5,
"currency": "AZN"},"loanPeriod": {"end": "22.01.2018","start": "22.01.2016"},
"interestRate": 19}],"salary": {"value": 4500,"currency": "AZN"},"surname": "Berners", "hasSalaryCard": true,"hasLoanHistory": true },
{"img": "01-shutterstock_476340928-Irina-Bg.jpg","id" : 1,"name": "Juliana","loans": [{"amount": {"value": 13000,"currency": "AZN"},"closed":false,"loaner": "PASHA Bank","period": {"type": "month","value": 36},"perMonth": {"value": 578.11,"currency": "AZN" },"dueAmount": {"value": 4200,"currency": "AZN"},"loanPeriod": {"end": "22.01.2022","start": "22.01.2019"},"interestRate": 18},{"amount": {"value": 5000,"currency": "AZN"},"closed": false,"loaner": "TBC","period": {"type": "month","value": 12},"perMonth": {"value": 416.66,"currency": "AZN"},"dueAmount": {"value": 2916,"currency": "AZN"},"loanPeriod": {"end": "03.01.2022","start": "03.01.2021"
}, "interestRate": 22},{"amount": { "value": 8500, "currency": "AZN"
},"closed": true,"loaner": "Revolut","period": {"type": "month", "value": 24
},"perMonth": {"value": 845.5,"currency": "AZN"},"dueAmount": {"value": 387.45,
"currency": "AZN"},"loanPeriod": {"end": "22.01.2018","start": "22.01.2016"},
"interestRate": 19}],"salary": {"value": 1400,"currency": "AZN"},"surname": "Morris", "hasSalaryCard": true,"hasLoanHistory": true },
{"img": "1bf656d56b5efcf9f4fa0e4e87701845e0e29e36.jpg","id" : 2,"name": "Alberto","loans": [{"amount": {"value": 13000,"currency": "AZN"},"closed":false,"loaner": "Bank of America","period": {"type": "month","value": 36},"perMonth": {"value": 485.7,"currency": "USD" },"dueAmount": {"value": 4200,"currency": "AZN"},"loanPeriod": {"end": "22.01.2022","start": "22.01.2019"},"interestRate": 18},{"amount": {"value": 5000,"currency": "AZN"},"closed": false,"loaner": "C.P.Morgan","period": {"type": "month","value": 12},"perMonth": {"value": 157.6,"currency": "AZN"},"dueAmount": {"value": 2916,"currency": "AZN"},"loanPeriod": {"end": "03.01.2022","start": "03.01.2021"
}, "interestRate": 22},{"amount": { "value": 8500, "currency": "AZN"
},"closed": true,"loaner": "Revolut","period": {"type": "month", "value": 24
},"perMonth": {"value": 275.5,"currency": "AZN"},"dueAmount": {"value": 287.45,
"currency": "AZN"},"loanPeriod": {"end": "22.01.2017","start": "22.01.2016"},
"interestRate": 19}],"salary": {"value": 4100,"currency": "AZN"},"surname": "Gates", "hasSalaryCard": true,"hasLoanHistory": true },
{
         "img": "images.jpg",
         "id":3,
         "name": "Henry",
         "loans": [
           {
             "amount": {
               "value": 18000,
               "currency": "AZN"
             },
             
               "closed":false
             ,
 
           "loaner": "J.P.Morgan",
             "period": {
               "type": "month",
               "value": 36
             },
             "perMonth": {
               "value": 174.11,
               "currency": "AZN"
             },
             "dueAmount": {
               "value": 2000,
               "currency": "AZN"
             },
             "loanPeriod": {
               "end": "22.01.2022",
               "start": "22.01.2019"
             },
             "interestRate": 18
           },
           {
             "amount": {
               "value": 5000,
               "currency": "AZN"
             },
             "closed": false,
             "loaner": "TBC",
             "period": {
               "type": "month",
               "value": 12
             },
             "perMonth": {
               "value": 346.66,
               "currency": "AZN"
             },
             "dueAmount": {
               "value": 2916,
               "currency": "AZN"
             },
             "loanPeriod": {
               "end": "03.01.2022",
               "start": "03.01.2021"
             },
             "interestRate": 22
           },
           {
             "amount": {
               "value": 8500,
               "currency": "AZN"
             },
             "closed": false,
             "loaner": "Citigroup Inc.",
             "period": {
               "type": "month",
               "value": 24
             },
             "perMonth": {
               "value": 185.5,
               "currency": "AZN"
             },
             "dueAmount": {
               "value": 2300,
               "currency": "AZN"
             },
             "loanPeriod": {
               "end": "22.01.2018",
               "start": "22.01.2016"
             },
             "interestRate": 19
           }
         ],
         "salary": {
           "value": 985,
           "currency": "AZN"
         },
         "surname": "Gulian",
         "hasSalaryCard": true,
         "hasLoanHistory": false
       },
       {
          "img": "profile-photos-4.jpg",
          "id":4,
          "name": "Tanya",
          "loans": [
            {
              "amount": {
                "value": 14000,
                "currency": "AZN"
              },
              
                "closed":false
              ,
  
            "loaner": "Fifth Third Bank	",
              "period": {
                "type": "month",
                "value": 36
              },
              "perMonth": {
                "value": 485.11,
                "currency": "AZN"
              },
              "dueAmount": {
                "value": 1700,
                "currency": "AZN"
              },
              "loanPeriod": {
                "end": "22.01.2022",
                "start": "22.01.2019"
              },
              "interestRate": 18
            },
            {
              "amount": {
                "value": 5000,
                "currency": "AZN"
              },
              "closed": false,
              "loaner": "TBC",
              "period": {
                "type": "month",
                "value": 12
              },
              "perMonth": {
                "value": 416.66,
                "currency": "AZN"
              },
              "dueAmount": {
                "value": 2916,
                "currency": "AZN"
              },
              "loanPeriod": {
                "end": "03.01.2022",
                "start": "03.01.2021"
              },
              "interestRate": 22
            },
            {
              "amount": {
                "value": 8500,
                "currency": "AZN"
              },
              "closed": true,
              "loaner": "Revolut",
              "period": {
                "type": "month",
                "value": 24
              },
              "perMonth": {
                "value": 45.1,
                "currency": "AZN"
              },
              "dueAmount": {
                "value": 157.5,
                "currency": "AZN"
              },
              "loanPeriod": {
                "end": "22.01.2018",
                "start": "22.01.2016"
              },
              "interestRate": 19
            }
          ],
          "salary": {
            "value": 1700,
            "currency": "AZN"
          },
          "surname": "Ryan",
          "hasSalaryCard": true,
          "hasLoanHistory": true
        },
        {
           "img": "social-media-profile-photos-3.jpg",
           "id":5,
           "name": "Robert",
           "loans": [
             {
               "amount": {
                 "value": 18000,
                 "currency": "AZN"
               },
               
                 "closed":false
               ,
   
             "loaner": "Kapital Bank",
               "period": {
                 "type": "month",
                 "value": 36
               },
               "perMonth": {
                 "value": 374.11,
                 "currency": "AZN"
               },
               "dueAmount": {
                 "value": 1900,
                 "currency": "AZN"
               },
               "loanPeriod": {
                 "end": "22.01.2022",
                 "start": "22.01.2019"
               },
               "interestRate": 18
             },
             {
               "amount": {
                 "value": 5000,
                 "currency": "AZN"
               },
               "closed": false,
               "loaner": "Bank of America Corp.	",
               "period": {
                 "type": "month",
                 "value": 12
               },
               "perMonth": {
                 "value": 386.66,
                 "currency": "AZN"
               },
               "dueAmount": {
                 "value": 2916,
                 "currency": "AZN"
               },
               "loanPeriod": {
                 "end": "03.01.2022",
                 "start": "03.01.2021"
               },
               "interestRate": 22
             },
             {
               "amount": {
                 "value": 8500,
                 "currency": "AZN"
               },
               "closed": false,
               "loaner": "Citigroup Inc.	",
               "period": {
                 "type": "month",
                 "value": 24
               },
               "perMonth": {
                 "value": 0,
                 "currency": "AZN"
               },
               "dueAmount": {
                 "value": 0,
                 "currency": "AZN"
               },
               "loanPeriod": {
                 "end": "22.01.2018",
                 "start": "22.01.2016"
               },
               "interestRate": 19
             }
           ],
           "salary": {
             "value": 2500,
             "currency": "AZN"
           },
           "surname": "Downey",
           "hasSalaryCard": true,
           "hasLoanHistory": true
         },
         {
            "img": "social-media-profile-photos-9.jpg",
            "id":6,
            "name": "Lauren",
            "loans": [
              {
                "amount": {
                  "value": 18000,
                  "currency": "AZN"
                },
                
                  "closed":false
                ,
    
              "loaner": "U.S. Bancorp	",
                "period": {
                  "type": "month",
                  "value": 36
                },
                "perMonth": {
                  "value": 810.11,
                  "currency": "AZN"
                },
                "dueAmount": {
                  "value": 3500,
                  "currency": "AZN"
                },
                "loanPeriod": {
                  "end": "22.01.2021",
                  "start": "22.01.2019"
                },
                "interestRate": 18
              },
              {
                "amount": {
                  "value": 5000,
                  "currency": "AZN"
                },
                "closed": false,
                "loaner": "HSBC	",
                "period": {
                  "type": "month",
                  "value": 12
                },
                "perMonth": {
                  "value": 578.66,
                  "currency": "AZN"
                },
                "dueAmount": {
                  "value": 2916,
                  "currency": "AZN"
                },
                "loanPeriod": {
                  "end": "03.01.2022",
                  "start": "03.01.2021"
                },
                "interestRate": 22
              },
              {
                "amount": {
                  "value": 8500,
                  "currency": "AZN"
                },
                "closed": true,
                "loaner": "Revolut",
                "period": {
                  "type": "month",
                  "value": 24
                },
                "perMonth": {
                  "value": 85.5,
                  "currency": "AZN"
                },
                "dueAmount": {
                  "value": 1700,
                  "currency": "AZN"
                },
                "loanPeriod": {
                  "end": "22.01.2018",
                  "start": "22.01.2016"
                },
                "interestRate": 19
              }
            ],
            "salary": {
              "value": 4100,
              "currency": "AZN"
            },
            "surname": "Douglas",
            "hasSalaryCard": true,
            "hasLoanHistory": true
          },
          {
             "img": "unnamed.jpg",
             "id":7,
             "name": "Alicia",
             "loans": [
               {
                 "amount": {
                   "value": 18000,
                   "currency": "AZN"
                 },
                 
                   "closed":false
                 ,
     
               "loaner": "Kapital Bank",
                 "period": {
                   "type": "month",
                   "value": 36
                 },
                 "perMonth": {
                   "value": 354.11,
                   "currency": "AZN"
                 },
                 "dueAmount": {
                   "value": 2400,
                   "currency": "AZN"
                 },
                 "loanPeriod": {
                   "end": "22.01.2022",
                   "start": "22.01.2019"
                 },
                 "interestRate": 18
               },
               {
                 "amount": {
                   "value": 5000,
                   "currency": "AZN"
                 },
                 "closed": false,
                 "loaner": "TBC",
                 "period": {
                   "type": "month",
                   "value": 12
                 },
                 "perMonth": {
                   "value": 416.66,
                   "currency": "AZN"
                 },
                 "dueAmount": {
                   "value": 2916,
                   "currency": "AZN"
                 },
                 "loanPeriod": {
                   "end": "03.01.2022",
                   "start": "03.01.2021"
                 },
                 "interestRate": 22
               },
               {
                 "amount": {
                   "value": 8500,
                   "currency": "AZN"
                 },
                 "closed": false,
                 "loaner": "Revolut",
                 "period": {
                   "type": "month",
                   "value": 24
                 },
                 "perMonth": {
                   "value": 250,
                   "currency": "AZN"
                 },
                 "dueAmount": {
                   "value": 2000,
                   "currency": "AZN"
                 },
                 "loanPeriod": {
                   "end": "22.01.2018",
                   "start": "22.01.2016"
                 },
                 "interestRate": 19
               }
             ],
             "salary": {
               "value": 800,
               "currency": "AZN"
             },
             "surname": "Allen",
             "hasSalaryCard": true,
             "hasLoanHistory": true
           },
           {
              "img": "01-shutterstock_476340928-Irina-Bg.jpg",
              "id":8,
              "name": "Sophia",
              "loans": [
                {
                  "amount": {
                    "value": 18000,
                    "currency": "AZN"
                  },
                  
                    "closed":false
                  ,
      
                "loaner": "Kapital Bank",
                  "period": {
                    "type": "month",
                    "value": 36
                  },
                  "perMonth": {
                    "value": 754.11,
                    "currency": "AZN"
                  },
                  "dueAmount": {
                    "value": 1500,
                    "currency": "AZN"
                  },
                  "loanPeriod": {
                    "end": "22.01.2022",
                    "start": "22.01.2019"
                  },
                  "interestRate": 18
                },
                {
                  "amount": {
                    "value": 5000,
                    "currency": "AZN"
                  },
                  "closed": false,
                  "loaner": "TBC",
                  "period": {
                    "type": "month",
                    "value": 12
                  },
                  "perMonth": {
                    "value": 956.66,
                    "currency": "AZN"
                  },
                  "dueAmount": {
                    "value": 2916,
                    "currency": "AZN"
                  },
                  "loanPeriod": {
                    "end": "03.01.2022",
                    "start": "03.01.2021"
                  },
                  "interestRate": 22
                },
                {
                  "amount": {
                    "value": 8500,
                    "currency": "AZN"
                  },
                  "closed": true,
                  "loaner": "Revolut",
                  "period": {
                    "type": "month",
                    "value": 24
                  },
                  "perMonth": {
                    "value": 185.5,
                    "currency": "AZN"
                  },
                  "dueAmount": {
                    "value": 1750,
                    "currency": "AZN"
                  },
                  "loanPeriod": {
                    "end": "22.01.2018",
                    "start": "22.01.2016"
                  },
                  "interestRate": 19
                }
              ],
              "salary": {
                "value": 5100,
                "currency": "AZN"
              },
              "surname": "Jenkins",
              "hasSalaryCard": true,
              "hasLoanHistory": false
            },
            {
               "img": "01-shutterstock_476340928-Irina-Bg.jpg",
               "id":9,
               "name": "Leslie",
               "loans": [
                 {
                   "amount": {
                     "value": 18000,
                     "currency": "AZN"
                   },
                   
                     "closed":false
                   ,
       
                 "loaner": "Kapital Bank",
                   "period": {
                     "type": "month",
                     "value": 36
                   },
                   "perMonth": {
                     "value": 124.11,
                     "currency": "AZN"
                   },
                   "dueAmount": {
                     "value": 2400,
                     "currency": "AZN"
                   },
                   "loanPeriod": {
                     "end": "22.01.2022",
                     "start": "22.01.2019"
                   },
                   "interestRate": 18
                 },
                 {
                   "amount": {
                     "value": 5000,
                     "currency": "AZN"
                   },
                   "closed": false,
                   "loaner": "TBC",
                   "period": {
                     "type": "month",
                     "value": 12
                   },
                   "perMonth": {
                     "value": 216.66,
                     "currency": "AZN"
                   },
                   "dueAmount": {
                     "value": 2916,
                     "currency": "AZN"
                   },
                   "loanPeriod": {
                     "end": "03.01.2022",
                     "start": "03.01.2021"
                   },
                   "interestRate": 22
                 },
                 {
                   "amount": {
                     "value": 8500,
                     "currency": "AZN"
                   },
                   "closed": true,
                   "loaner": "Revolut",
                   "period": {
                     "type": "month",
                     "value": 15
                   },
                   "perMonth": {
                     "value": 195,
                     "currency": "AZN"
                   },
                   "dueAmount": {
                     "value": 2500,
                     "currency": "AZN"
                   },
                   "loanPeriod": {
                     "end": "22.01.2018",
                     "start": "22.01.2016"
                   },
                   "interestRate": 19
                 }
               ],
               "salary": {
                 "value": 1300,
                 "currency": "AZN"
               },
               "surname": "Smith",
               "hasSalaryCard": true,
               "hasLoanHistory": true
             },
             {
                "img": "pexels-photo-2078265.jpeg",
                "id":10,
                "name": "Barry",
                "loans": [
                  {
                    "amount": {
                      "value": 18000,
                      "currency": "AZN"
                    },
                    
                      "closed":false
                    ,
        
                  "loaner": "HSBC",
                    "period": {
                      "type": "month",
                      "value": 36
                    },
                    "perMonth": {
                      "value": 324.11,
                      "currency": "AZN"
                    },
                    "dueAmount": {
                      "value": 2400,
                      "currency": "AZN"
                    },
                    "loanPeriod": {
                      "end": "22.01.2022",
                      "start": "22.01.2019"
                    },
                    "interestRate": 18
                  },
                  {
                    "amount": {
                      "value": 5000,
                      "currency": "AZN"
                    },
                    "closed": false,
                    "loaner": "TBC",
                    "period": {
                      "type": "month",
                      "value": 12
                    },
                    "perMonth": {
                      "value": 316.66,
                      "currency": "AZN"
                    },
                    "dueAmount": {
                      "value": 2916,
                      "currency": "AZN"
                    },
                    "loanPeriod": {
                      "end": "03.01.2022",
                      "start": "03.01.2021"
                    },
                    "interestRate": 22
                  },
                  {
                    "amount": {
                      "value": 8500,
                      "currency": "AZN"
                    },
                    "closed": false,
                    "loaner": "Revolut",
                    "period": {
                      "type": "month",
                      "value": 24
                    },
                    "perMonth": {
                      "value": 165.4,
                      "currency": "AZN"
                    },
                    "dueAmount": {
                      "value": 1600,
                      "currency": "AZN"
                    },
                    "loanPeriod": {
                      "end": "22.01.2018",
                      "start": "22.01.2016"
                    },
                    "interestRate": 19
                  }
                ],
                "salary": {
                  "value": 2700,
                  "currency": "AZN"
                },
                "surname": "Lawrence",
                "hasSalaryCard": true,
                "hasLoanHistory": false
              },
              {
                 "img": "pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg",
                 "id":11,
                 "name": "Zack",
                 "loans": [
                   {
                     "amount": {
                       "value": 18000,
                       "currency": "AZN"
                     },
                     
                       "closed":false
                     ,
         
                   "loaner": "Bank of America",
                     "period": {
                       "type": "month",
                       "value": 36
                     },
                     "perMonth": {
                       "value": 184.11,
                       "currency": "AZN"
                     },
                     "dueAmount": {
                       "value": 2400,
                       "currency": "AZN"
                     },
                     "loanPeriod": {
                       "end": "22.01.2022",
                       "start": "22.01.2019"
                     },
                     "interestRate": 18
                   },
                   {
                     "amount": {
                       "value": 5000,
                       "currency": "AZN"
                     },
                     "closed": false,
                     "loaner": "TBC",
                     "period": {
                       "type": "month",
                       "value": 12
                     },
                     "perMonth": {
                       "value": 416.66,
                       "currency": "AZN"
                     },
                     "dueAmount": {
                       "value": 2916,
                       "currency": "AZN"
                     },
                     "loanPeriod": {
                       "end": "03.01.2022",
                       "start": "03.01.2021"
                     },
                     "interestRate": 22
                   },
                   {
                     "amount": {
                       "value": 8500,
                       "currency": "AZN"
                     },
                     "closed": true,
                     "loaner": "Revolut",
                     "period": {
                       "type": "month",
                       "value": 24
                     },
                     "perMonth": {
                       "value": 0,
                       "currency": "AZN"
                     },
                     "dueAmount": {
                       "value": 0,
                       "currency": "AZN"
                     },
                     "loanPeriod": {
                       "end": "22.01.2018",
                       "start": "22.01.2016"
                     },
                     "interestRate": 19
                   }
                 ],
                 "salary": {
                   "value": 1950,
                   "currency": "AZN"
                 },
                 "surname": "Watts",
                 "hasSalaryCard": true,
                 "hasLoanHistory": false
               },
               {
                  "img": "profile-photos-750x530.jpeg",
                  "id":12,
                  "name": "Claudia",
                  "loans": [
                    {
                      "amount": {
                        "value": 18000,
                        "currency": "AZN"
                      },
                      
                        "closed":false
                      ,
          
                    "loaner": "Kapital Bank",
                      "period": {
                        "type": "month",
                        "value": 24
                      },
                      "perMonth": {
                        "value": 574.11,
                        "currency": "AZN"
                      },
                      "dueAmount": {
                        "value": 1900,
                        "currency": "AZN"
                      },
                      "loanPeriod": {
                        "end": "22.01.2021",
                        "start": "22.01.2018"
                      },
                      "interestRate": 18
                    },
                    {
                      "amount": {
                        "value": 4000,
                        "currency": "AZN"
                      },
                      "closed": false,
                      "loaner": "TBC",
                      "period": {
                        "type": "month",
                        "value": 12
                      },
                      "perMonth": {
                        "value": 756.66,
                        "currency": "AZN"
                      },
                      "dueAmount": {
                        "value": 2800,
                        "currency": "AZN"
                      },
                      "loanPeriod": {
                        "end": "03.01.2022",
                        "start": "03.01.2021"
                      },
                      "interestRate": 22
                    },
                    {
                      "amount": {
                        "value": 8500,
                        "currency": "AZN"
                      },
                      "closed": false,
                      "loaner": "Revolut",
                      "period": {
                        "type": "month",
                        "value": 18
                      },
                      "perMonth": {
                        "value": 341.5,
                        "currency": "AZN"
                      },
                      "dueAmount": {
                        "value": 2100,
                        "currency": "AZN"
                      },
                      "loanPeriod": {
                        "end": "22.01.2018",
                        "start": "22.01.2016"
                      },
                      "interestRate": 19
                    }
                  ],
                  "salary": {
                    "value": 3400,
                    "currency": "AZN"
                  },
                  "surname": "May",
                  "hasSalaryCard": true,
                  "hasLoanHistory": true
                }
              ]
function getData(event){
  var x = event.target;
  console.log(x.tagName)
}
function start(){

for (var i = 0;i <= tableData.length;i++ ){

  if(tableData[i]["loans"][0]["closed"] == true){
    tableData[i]["loans"][0]["perMonth"]["value"] = 0
    tableData[i]["loans"][1]["dueAmount"]["value"] = 0
 
  }else if(tableData[i]["loans"][1]["closed"] == true){
   tableData[i]["loans"][1]["perMonth"]["value"] = 0
   tableData[i]["loans"][1]["dueAmount"]["value"] = 0
 
 }else if(tableData[i]["loans"][2]["closed"] == true){
   tableData[i]["loans"][2]["perMonth"]["value"] = 0
   tableData[i]["loans"][2]["dueAmount"]["value"] = 0
 }
var monthly_payment = tableData[i]["loans"][0]["perMonth"]["value"] + tableData[i]["loans"][1]["perMonth"]["value"] + tableData[i]["loans"][2]["perMonth"]["value"];
if(monthly_payment < tableData[i]["salary"]["value"] * (45 / 100)){
  var result = "Can apply"
}else{
  var result = "Can not apply"
}
var loan_status = (tableData[i]["loans"][0]["closed"] == true || tableData[i]["loans"][1]["closed"] == true || tableData[i]["loans"][2]["closed"] == true)
 

   var row = `<tr class="row" data-id=${tableData[i]["id"]} onclick="modal${i}()" id="${i}">  
    
 <td><img src=${tableData[i].img}> </td>
 <td>${tableData[i].name} </td>
 <td>${tableData[i].surname} </td>
 <td>${tableData[i]["salary"]["value"]} ${tableData[i]["salary"]["currency"]} </td>
   <td class='status'> ${loan_status}</td>
      <td> ${ monthly_payment} ${tableData[i]["salary"]["currency"]} </td>
      <td>  ${result} </td>      
      <td> ${tableData[i].hasLoanHistory} </td>   
       </tr>`
       var table = $('#tableBody');
       table.append(row); 

}

}

function quit(){
  document.getElementById("modal").style.display = "none";
  document.body.style.opacity = 1.0;
  document.getElementById("hovered").style.opacity = 1;
  document.getElementById("close").style.display = "none";
  document.getElementsByTagName("form")[0].style.display = "flex"
  var x = 0;
   while (x <= tableData.length * 10){
    document.querySelectorAll("#modal-body tr")[x].style.display = "none";
    x++
   }
  }
function modal0(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
var modalRow = `<tr class="RowModal">
<td>${tableData[0]["loans"][0]["loaner"]} </td>
<td>${tableData[0]["loans"][0]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}   </td>
<td>${tableData[0]["loans"][0]["closed"]} </td>
  <td> ${tableData[0]["loans"][0]["perMonth"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[0]["loans"][0]["dueAmount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[0]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[0]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[0]["loans"][1]["loaner"]} </td>
<td>${tableData[0]["loans"][1]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[0]["loans"][1]["closed"]} </td>
  <td> ${tableData[0]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[0]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[0]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[0]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[0]["loans"][2]["loaner"]} </td>
  <td>${tableData[0]["loans"][2]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
  <td>${tableData[0]["loans"][2]["closed"]} </td>
    <td> ${tableData[0]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[0]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[0]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[0]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal1(){
  document.getElementById("modal").style.display = "flex";
 document.getElementById("hovered").style.opacity = 0.01;
 document.getElementById("close").style.display = "flex";
 document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr  class="RowModal">
<td>${tableData[1]["loans"][0]["loaner"]} </td>
<td>${tableData[1]["loans"][0]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
<td>${tableData[1]["loans"][0]["closed"]} </td>
  <td> ${tableData[1]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[1]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[1]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[1]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr  class="RowModal">
<td>${tableData[1]["loans"][1]["loaner"]} </td>
<td>${tableData[1]["loans"][1]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[1]["loans"][1]["closed"]} </td>
  <td> ${tableData[1]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[1]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[1]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[1]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr >
  <td>${tableData[1]["loans"][2]["loaner"]} </td>
  <td>${tableData[1]["loans"][2]["amount"]["value"]}   ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td>${tableData[1]["loans"][2]["closed"]} </td>
    <td> ${tableData[1]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[1]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[1]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[1]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal2(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
var modalRow = `<tr class="RowModal">
<td>${tableData[2]["loans"][0]["loaner"]} </td>
<td>${tableData[2]["loans"][0]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[2]["loans"][0]["closed"]} </td>
  <td> ${tableData[2]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[2]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[2]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[2]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[2]["loans"][1]["loaner"]} </td>
<td>${tableData[2]["loans"][1]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
<td>${tableData[2]["loans"][1]["closed"]} </td>
  <td> ${tableData[2]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[2]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[2]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[2]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[2]["loans"][2]["loaner"]} </td>
  <td>${tableData[2]["loans"][2]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
  <td>${tableData[2]["loans"][2]["closed"]} </td>
    <td> ${tableData[2]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[2]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[2]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[2]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal4(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[4]["loans"][0]["loaner"]} </td>
<td>${tableData[4]["loans"][0]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[4]["loans"][0]["closed"]} </td>
  <td> ${tableData[4]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[4]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[4]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[4]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[4]["loans"][1]["loaner"]} </td>
<td>${tableData[4]["loans"][1]["amount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}   </td>
<td>${tableData[4]["loans"][1]["closed"]} </td>
  <td> ${tableData[4]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[4]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[4]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[4]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[4]["loans"][2]["loaner"]} </td>
  <td>${tableData[4]["loans"][2]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
  <td>${tableData[4]["loans"][2]["closed"]} </td>
    <td> ${tableData[4]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[4]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[4]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[4]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal5(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[5]["loans"][0]["loaner"]} </td>
<td>${tableData[5]["loans"][0]["amount"]["value"]}   ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
<td>${tableData[5]["loans"][0]["closed"]} </td>
  <td> ${tableData[5]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[5]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[5]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[5]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[5]["loans"][1]["loaner"]} </td>
<td>${tableData[5]["loans"][1]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[5]["loans"][1]["closed"]} </td>
  <td> ${tableData[5]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[5]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[5]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[5]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[5]["loans"][2]["loaner"]} </td>
  <td>${tableData[5]["loans"][2]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
  <td>${tableData[5]["loans"][2]["closed"]} </td>
    <td> ${tableData[5]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[5]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[5]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[5]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal6(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[6]["loans"][0]["loaner"]} </td>
<td>${tableData[6]["loans"][0]["amount"]["value"]}   ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
<td>${tableData[6]["loans"][0]["closed"]} </td>
  <td> ${tableData[6]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[6]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[6]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[6]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[6]["loans"][1]["loaner"]} </td>
<td>${tableData[6]["loans"][1]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[6]["loans"][1]["closed"]} </td>
  <td> ${tableData[6]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[6]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[6]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[6]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[6]["loans"][2]["loaner"]} </td>
  <td>${tableData[6]["loans"][2]["amount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}   </td>
  <td>${tableData[6]["loans"][2]["closed"]} </td>
    <td> ${tableData[6]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[6]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[6]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[6]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal7(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[7]["loans"][0]["loaner"]} </td>
<td>${tableData[7]["loans"][0]["amount"]["value"]}   ${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
<td>${tableData[7]["loans"][0]["closed"]} </td>
  <td> ${tableData[7]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[7]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[7]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[7]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[7]["loans"][1]["loaner"]} </td>
<td>${tableData[7]["loans"][1]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
<td>${tableData[7]["loans"][1]["closed"]} </td>
  <td> ${tableData[7]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[7]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[7]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[7]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[7]["loans"][2]["loaner"]} </td>
  <td>${tableData[7]["loans"][2]["amount"]["value"]}  ${tableData[0]["loans"][0]["dueAmount"]["currency"]} </td>
  <td>${tableData[7]["loans"][2]["closed"]} </td>
    <td> ${tableData[7]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[7]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[7]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[7]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal9(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[9]["loans"][0]["loaner"]} </td>
<td>${tableData[9]["loans"][0]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
<td>${tableData[9]["loans"][0]["closed"]} </td>
  <td> ${tableData[9]["loans"][0]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[9]["loans"][0]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[9]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[9]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[9]["loans"][1]["loaner"]} </td>
<td>${tableData[9]["loans"][1]["amount"]["value"]} ${tableData[0]["loans"][0]["dueAmount"]["currency"]}  </td>
<td>${tableData[9]["loans"][1]["closed"]} </td>
  <td> ${tableData[9]["loans"][1]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[9]["loans"][1]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
  <td> ${tableData[9]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[9]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[9]["loans"][2]["loaner"]} </td>
  <td>${tableData[9]["loans"][2]["amount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}   </td>
  <td>${tableData[9]["loans"][2]["closed"]} </td>
    <td> ${tableData[9]["loans"][2]["perMonth"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[9]["loans"][2]["dueAmount"]["value"]}${tableData[0]["loans"][0]["dueAmount"]["currency"]}</td>
    <td> ${tableData[9]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[9]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function modal12(){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("hovered").style.opacity = 0.01;
  document.getElementById("close").style.display = "flex";
  document.getElementsByTagName("form")[0].style.display = "none"
 
var modalRow = `<tr class="RowModal">
<td>${tableData[12]["loans"][0]["loaner"]} </td>
<td>${tableData[12]["loans"][0]["amount"]["value"]}   </td>
<td>${tableData[12]["loans"][0]["closed"]} </td>
  <td> ${tableData[12]["loans"][0]["perMonth"]["value"]}</td>
  <td> ${tableData[12]["loans"][0]["dueAmount"]["value"]}</td>
  <td> ${tableData[12]["loans"][0]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[12]["loans"][0]["loanPeriod"]["end"]}</td>
  </tr>
<tr class="RowModal">
<td>${tableData[12]["loans"][1]["loaner"]} </td>
<td>${tableData[12]["loans"][1]["amount"]["value"]}   </td>
<td>${tableData[12]["loans"][1]["closed"]} </td>
  <td> ${tableData[12]["loans"][1]["perMonth"]["value"]}</td>
  <td> ${tableData[12]["loans"][1]["dueAmount"]["value"]}</td>
  <td> ${tableData[12]["loans"][1]["loanPeriod"]["start"]}  </td>
  <td>  ${tableData[12]["loans"][1]["loanPeriod"]["end"]}</td></tr>
  <tr class="RowModal">
  <td>${tableData[12]["loans"][2]["loaner"]} </td>
  <td>${tableData[12]["loans"][2]["amount"]["value"]}   </td>
  <td>${tableData[12]["loans"][2]["closed"]} </td>
    <td> ${tableData[12]["loans"][2]["perMonth"]["value"]}</td>
    <td> ${tableData[12]["loans"][2]["dueAmount"]["value"]}</td>
    <td> ${tableData[12]["loans"][2]["loanPeriod"]["start"]}  </td>
    <td>  ${tableData[12]["loans"][2]["loanPeriod"]["end"]}</td>
</tr>`
var modal = $('#modal-body');
modal.append(modalRow)
}
function Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("tableBody");
  tr = table.getElementsByTagName("tr");
  for (s = 0; s < tr.length; s++) {
    td = tr[s].getElementsByTagName("td")[1];
    if (td) {
      textValue = td.textContent || td.innerText;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        tr[s].style.display = "";
      } else{
        tr[s].style.display = "none";
      }
    }       
  }
}

