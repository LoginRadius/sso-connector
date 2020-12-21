
var Multipassify = require('multipassify');
var jsonQuery = require("json-query");
var url = require("url");

var storeConfig = {
    StoreName : '<Shopify Store Name>',    
    StoreUrl : '<Shopify Store URL>',
    StoreLoginUrl : '<Shopify Store Login URL>',
    AccessToken : '<Shopify Multipass Token>',
    MultipassSecret :'<Shopify Multipass Secret>' 
}

var dataMap = {
    email: "Email[0].Value",
    first_name: "FirstName",
    last_name: "LastName"  
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
