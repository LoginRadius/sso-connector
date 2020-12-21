var jsonQuery = require("json-query");
var url = require("url");
var Multipassify = require('multipassify');

//Shopify Store Config Object
var storeConfig = {
    StoreName: 'internal-jitender',
    StoreUrl: 'https://internal-jitender.myshopify.com',
    StoreLoginUrl: 'https://internal-jitender.myshopify.com/account/login/',
    AccessToken: '35d5451702461c818749e7298497b9c8',
    MultipassSecret: '90578f080632d147363677499a22da99'
}

//Enter here your user profile object which might have different sturture than the example here.
var userProfile = {
    "UserName": "JohnSmith",
    "Uid": "f2005bd20****************3278343",
    "FirstName": "Test",
    "MiddleName": "M.",
    "LastName": "User",
    "Suffix": "Junior",
    "FullName": "Test M. User",
    "NickName": "TMC",
    "ProfileName": "TMA",
    "BirthDate": "1990-02-07",
    "Gender": "F",
    "Website": "www.whatwebsite.com",
    "Email": [{
        "Type": "Primary",
        "Value": "NorthOfKing2@gmail.com"
    }],
    "Addresses": [{
        "Type": "Primary",
        "Address1": "1508",
        "Address2": "West Hill",
        "City": "Burnaby",
        "State": "Vancouver",
        "PostalCode": "T6LV9",
        "Region": "North America",
        "Country": "Canada"
    }]
}

//Enter dataMap according to your user profile object 
var dataMap = {
    "last_name": "LastName",
    "first_name": "FirstName",
    "email": "Email[0].Value",
    "addresses.address1": "Addresses[0].Address1",
    "addresses.address2": "Addresses[0].Address2",
    "addresses.country": "Addresses[0].Country",
    "addresses.city": "Addresses[0].City",
    "addresses.zip": "Addresses[0].PostalCode"
}

function getPayload(dataMap, userProfile, ipAddress = null) {

    let claim = {};
    let addreses = {};
    for (var key in dataMap) {
        if (key.includes("addresses")) {
            addreses[key.replace("addresses.", "")] = jsonQuery(dataMap[key], {
                data: userProfile
            }).value;
        } else {


            claim[key] = jsonQuery(dataMap[key], {
                data: userProfile
            }).value;
        }
    }
    if (Object.keys(addreses).length !== 0) {
        claim["addresses"] = [addreses];
    }
    //  claim.remote_ip = ipAddress ;
    claim.return_to = "/account";
    claim.created_at = new Date();
    return claim;

}

var userClaim = getPayload(dataMap, userProfile);

generateShopifyMultipassURL(userProfile);

function generateShopifyMultipassURL(userProfile) {
    var multipassify = new Multipassify(storeConfig.MultipassSecret);
    // Create your customer data hash
    var userClaim = getPayload(dataMap, userProfile);
    var storeUrl = new URL(storeConfig.StoreUrl);
    // Generate a Shopify multipass URL to your shop
    var loginUrl = multipassify.generateUrl(userClaim, storeUrl.host);
    console.log(loginUrl);
}