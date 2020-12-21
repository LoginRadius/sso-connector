
var Multipassify = require('multipassify');
var jsonQuery = require("json-query");
var url = require("url");

var storeConfig = {
    StoreName : 'internal-jitender',    
    StoreUrl : 'https://internal-jitender.myshopify.com',
    StoreLoginUrl : 'https://internal-jitender.myshopify.com/account/login/',
    AccessToken : '35d5451702461c818749e7298497b9c8',
    MultipassSecret :'90578f080632d147363677499a22da99' 
}

var dataMap = {
    email: "Email[0].Value",
    first_name: "FirstName",
    last_name: "LastName"    /*,
    addresses: [{
      address1: "Addresses[0].Address1",
      address2: "Addresses[0].Address2",
      country: "Addresses[0].Country",
      city: "Addresses[0].City",
      zip: "Addresses[0].Country.PostalCode",
      province: "Addresses[0].Country.State"
    }]*/
  }

function getPayload( dataMap, userProfile, ipAddress = null) {
    
            let claim = {};

            for (var key in dataMap) {
                if (key == "addresses" && dataMap[key] == "Addresses") {
                    if (userProfile["Addresses"] && userProfile["Addresses"].length) {
                        let userAddress = userProfile["Addresses"][0];
                        claim[key] = [{
                            address1: userAddress.Address1,
                            address2: userAddress.Address2,
                            city: userAddress.City,
                            country: userAddress.Country,
                            province: userAddress.State,
                            zip: userAddress.PostalCode,
                            default: true
                        }];
                    }
                } else {
                    claim[key] = jsonQuery(dataMap[key], { data: userProfile }).value;
                }
            }

            //claim.remote_ip = ipAddress;
            claim.return_to = "/account";
            claim.created_at = new Date();
            return claim;
}


 
  // Construct the Multipassify encoder
  var multipassify = new Multipassify(storeConfig.MultipassSecret);
 
  function generateShopifyMultipassURL(userProfile){
    
  // Create your customer data hash
  var userClaim = getPayload( dataMap, userProfile);
  //console.log(userClaim);
   // Encode a Multipass token
   var token = multipassify.encode(userClaim);
 
   var storeUrl = new URL(storeConfig.StoreUrl);
 
  
   // Generate a Shopify multipass URL to your shop
   var loginUrl = multipassify.generateUrl(userClaim,storeUrl.host );
 //console.log(loginUrl);
 return loginUrl;
 
  }

  exports.generateShopifyMultipassURL = generateShopifyMultipassURL;
