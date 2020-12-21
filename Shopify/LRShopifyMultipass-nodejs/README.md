# Introduction 
The LRShopifyMultipass-nodejs contains a demo for SSO workflow between LoginRadius and Shopify application using the SSO connector code. It leverages the LoginRadius NodeJs SDK library to call LoginRadius authentication APIs. 

Please see the LoginRadius [NodeJs SDK Demo](https://github.com/LoginRadius/node-js-sdk) for the complete LoginRadius Nodejs Authentication demo.

Please visit [here](http://www.loginradius.com/) for more information on the LoginRadius platform.

### Prerequisite
1. **LoginRadius Account:** If you don't have a LoginRadius account, you can create a free account at `https://www.loginradius.com/pricing/`.
2. **Shopify Plus Account:** Please see `https://shopify.dev/docs/admin-api/rest/reference/plus/multipass` for how to get Multipass Credential.


### Installation
1. Clone the **LRShopifyMultipass-nodejs** folder to your desired location
2. Add your LoginRadius API Key, App Name, and SOTT value in `demo/assets/js/options.js`. 
3. Create `var config` in `server.js`.
```
  var config = {
      apiDomain: 'api.loginradius.com',
      apiKey: '{{ Your API KEY }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your Sitename }}',
	  apiRequestSigning: false,
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
  ```
Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret) 

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your NodeJs SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).

4. Add your Shopify store details under **storeConfig** variable in `src/shopifyMultipass.js`.
5. Add your data mapping object under **dataMap** variable in `src/shopifyMultipass.js`. These data points will be synced from LoginRadius to Shopify store. 
6. In the repo's parent folder run `npm install` and this will install any packages necessary for the project.
7. Once everything is installed type `node server.js`.

## Test

- Open `http://localhost:3000/demo` in your browser
- Create a LoginRadius user account using the registration form on the demo
- Login into the demo and navigate to **Shopify Store** on the profile page.
- Click the **Redirect to Shopify Store** button and it will log you in to the Shopify store.

### LoginRadius APIs called used in this Demo
* PUT : [Auth Update Profile by Token](#UpdateProfileByAccessToken-put-)<br>
* PUT : [Auth Verify Email By OTP](#VerifyEmailByOTP-put-)<br>
* PUT : [Auth Reset Password by Reset Token](#ResetPasswordByResetToken-put-)
* PUT : [Auth Change Password](#ChangePassword-put-)<br>
* POST : [Auth Login by Email](#LoginByEmail-post-)<br>
* POST : [Auth Forgot Password](#ForgotPassword-post-)<br>
* POST : [Auth User Registration by Email](#UserRegistrationByEmail-post-)<br>
* GET : [Auth Read all Profiles by Token](#GetProfileByAccessToken-get-)<br>
* GET : [Auth Verify Email](#VerifyEmail-get-)<br>
* GET : [Account Profiles by UID](#GetAccountProfileByUid-get-)<br>


<h6 id="UpdateProfileByAccessToken-put-"> Auth Update Profile by Token (PUT)</h6>
 This API is used to update the user's profile by passing the access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

 
 

 ```

var accessToken = "<accessToken>"; //Required

var userProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var nullSupport = true; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.updateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, nullSupport, smsTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
 
<h6 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h6>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

 
 

 ```


var emailVerificationByOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>"
};  //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.verifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h6>
 This API is used to set a new password for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

 
 

 ```


var resetPasswordByResetTokenModel ={ 
"password" : "<password>",
"resetToken" : "<resetToken>"
};  //Required

lrv2.authenticationApi.resetPasswordByResetToken(resetPasswordByResetTokenModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
 
<h6 id="ChangePassword-put-"> Auth Change Password (PUT)</h6>
 This API is used to change the account's password based on the previous password  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-change-password)

 
 

 ```

var accessToken = "<accessToken>"; //Required
var newPassword = "<newPassword>"; //Required
var oldPassword = "<oldPassword>"; //Required

lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
 
<h6 id="LoginByEmail-post-"> Auth Login by Email (POST)</h6>
 This API retrieves a copy of the user data based on the Email  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

 
 

 ```


var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
    
  
 
<h6 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h6>
 This API is used to send the reset password URL to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-forgot-password)

 
 

 ```

var email = "<email>"; //Required
var resetPasswordUrl = "<resetPasswordUrl>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
  
 
<h6 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h6>
 This API creates a user in the database as well as sends a verification email to the user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

 
 

 ```


var authUserRegistrationModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var sott = "<sott>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var options = "<options>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
 
<h6 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h6>
 This API retrieves a copy of the user data based on the access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

 
 

 ```

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.getProfileByAccessToken(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyEmail-get-"> Auth Verify Email (GET)</h6>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email/)

 
 

 ```

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
  
 
<h6 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h6>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-uid)

 
 

 ```

var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByUid(uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```