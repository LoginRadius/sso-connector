var Multipassify = require('multipassify');
var url = require("url");

var storeConfig = {
    StoreName: '<StoreName>',
    StoreUrl: '<StoreUrl>',
    StoreLoginUrl: '<StoreLoginUrl>',
    AccessToken: '<AccessToken>',
    MultipassSecret: '<MultipassSecret>',
}


// Construct the Multipassify encoder
var multipassify = new Multipassify(storeConfig.MultipassSecret);

function generateShopifyMultipassURL(userClaim) {
    //console.log(userClaim);
    // Encode a Multipass token
    var token = multipassify.encode(userClaim);
    var storeUrl = new URL(storeConfig.StoreUrl);
    // Generate a Shopify multipass URL to your shop
    console.log(userClaim);
    var loginUrl = multipassify.generateUrl(userClaim, storeUrl.host);
    //console.log(loginUrl);
    return loginUrl;

}

exports.generateShopifyMultipassURL = generateShopifyMultipassURL;