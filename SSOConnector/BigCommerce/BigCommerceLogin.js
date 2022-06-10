var jwt = require('jsonwebtoken');
var uuid = require('uuid');
var storeConfig = {
    clientSecret: '<clientSecret>',
    clientId: 'clientId',
    storeHash: 'storeHash',
    storeUrl: 'https://example.bigcommerce.com'

}

function generateBigCommerceLoginURL(customerId, returnUrl, ip,channel_id ) {
    // See https://developer.bigcommerce.com/docs/e2f4863ff8f51-customer-login-api#customer-login-jwt-payload-reference for more details on the JWT payload
    var dateCreated = Math.floor(Date.now() / 1000);
    var payload = {
        iss: storeConfig.clientId,
        store_hash: storeConfig.storeHash,
        operation: "customer_login",
        iat: dateCreated,
        jti: uuid.v4(),
        customer_id: Number.parseInt(customerId),
        channel_id: channel_id ?channel_id : null,
        redirect_to: returnUrl ? returnUrl : "/account.php",
        request_ip: ip ? ip : "0.0.0"
    };

    let jwttoken =  jwt.sign(payload, storeConfig.clientSecret)
    return `${storeConfig.storeUrl}/login/token/${jwttoken}`;
}

exports.generateBigCommerceLoginURL = generateBigCommerceLoginURL;