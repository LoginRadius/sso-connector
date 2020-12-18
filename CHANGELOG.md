
> **LoginRadius Node JS SDK Change Log** provides information regarding what has changed, more specifically what changes, improvements and bug fix has been made to the SDK. For more details please refer to the [LoginRadius API Documention](https://docs.loginradius.com/api/v2/deployment/sdk-libraries/node-js-library)

# Version 11.0.0
Release on Aug 04, 2020

## Enhancements

 - Added a parameter isWeb in "RefreshAccessToken" API.
 - Changed the dependency of request package to https package 
 - Added a parameter SocialAppName in "getAccessTokenByFacebookAccessToken,  getAccessTokenByTwitterAccessToken,
   getAccessTokenByGoogleAccessToken, getAccessTokenByLinkedinAccessToken, getAccessTokenByAppleIdCode, getAccessTokenByGoogleAuthCode"  native Social login APIs.


## Added new multiple APIs for better user experience

 - Added linkSocialIdentities(POST) API.
 - Added linkSocialIdentitiesByPing(POST) API.
 - Added getAccessTokenByAppleIdCode API.
 - Added getAccessTokenByWeChatCode API.


## Removed APIs:

 - linkSocialIdentity API(PUT)
 - getSocialIdentity API(GET)

# Version 10.0.0
Release on **September 30,2019**

## Enhancements
This full version release includes major breaking changes with several improvements and optimizations :

 - Enhanced the coding standards of SDK to follow industry programming styles and best practices.
 - Enhanced security standards of SDK.
 - Reduced code between the business layer and persistence layer for optimization of SDK performance.
 - Added internal parameter validations in the API function.
 - ApiKey and ApiSecret usage redundancy removed.
 - All LoginRadius related features need to be defined once only and SDK will handle them automatically.
 - Improved the naming conventions of API functions for better readability.
 - Better Exception Handling for LoginRadius API Response in SDK.
 - Revamped complete SDK and restructured it with latest API function names and parameters.
 - Added detailed description to API functions and parameters for better understanding.
 - Updated the demo according to latest SDK changes.
 - Used path module for OS independent.
 - Added PIN Authentication feature APIs.
 - Added Consent Management feature APIs.


## Added new multiple APIs for better user experience

 - Update Phone ID by UID
 - Upsert Email
 - Role Context profile
 - MFA Resend OTP
 - User Registration By Captcha
 - Get Access Token via Linkedin Token
 - Get Access Token By Foursquare Access Token
 - Get Active Session By Account Id
 - Get Active Session By Profile Id
 - Delete User Profiles By Email
 - Verify Multifactor OTP Authentication
 - Verify Multifactor Password Authentication
 - Verify Multifactor PIN Authentication
 - Update UID
 - MFA Re-authentication by PIN
 - PIN Login
 - Forgot PIN By Email
 - Forgot PIN By UserName
 - Reset PIN By ResetToken
 - Reset PIN By SecurityAnswer And Email
 - Reset PIN By SecurityAnswer And Username
 - Reset PIN By SecurityAnswer And Phone
 - Forgot PIN By Phone
 - Change PIN By Token
 - Reset PIN by Phone and OTP
 - Reset PIN by Email and OTP
 - Reset PIN by Username and OTP
 - Set PIN By PinAuthToken
 - Invalidate PIN Session Token
 - Submit Consent By ConsentToken
 - Get Consent Logs
 - Submit Consent By AccessToken
 - Verify Consent By AccessToken
 - Update Consent Profile By AccessToken
 - Get Consent Logs By Uid
 - Album With Cursor
 - Audio With Cursor
 - Check In With Cursor
 - Event With Cursor
 - Following With Cursor
 - Group With Cursor
 - Like With Cursor


## Removed APIs:

 - GetCompanies API
 - Getstatus API

# Version 10.0.0-beta

Released on **Aug 05, 2019**
## Enhancements
This beta version release includes major changes with several improvements and optimizations
 - Enhanced the coding standards of SDK to follow industry programming styles and best practices.
 - Enhanced security standards of SDK.
 - Reduced code between the business layer and persistence layer for optimization of SDK performance.
 - Added internal parameter validations in the API function.
 - ApiKey and ApiSecret usage redundancy removed.
 - All LoginRadius related features need to be defined once only and SDK will handle them automatically.
 - Improved the naming conventions of API functions for better readability.
 - Better Error and Exception Handling for LoginRadius API Response in SDK.
 - Revamped complete SDK and restructured it with latest API function names and parameters.
 - Added detailed description to API functions and parameters for better understanding.
 - Updated the demo according to latest SDK changes.
 - Used path module for OS independent.

## Added new multiple APIs for better user experience

 - Update Phone ID by UID
 - Upsert Email
 - Role Context profile
 - MFA Resend OTP
 - User Registration By Captcha
 - Get Access Token via Linkedin Token
 - Get Access Token By Foursquare Access Token
 - Get Active Session By Account Id
 - Get Active Session By Profile Id

## Removed APIs:
 - GetCompanies API


# Version 4.5.0

Released on **March 12, 2019**

 - Enable gZip Compression.
 - Resolved JShint detected warnings & errors 

=============================================================

# Version 4.4.0

Released on **Dec 5, 2018**

## Enhancements
 - A Demo has been added to the SDK under the demo directory.
 - Request Access Token Header and Payload Option
 - Implemented Custom Domain option.
 - Implement functionality to customize your region.
 - API Route Changes: We have renamed some login flow for better naming. "Auto Login" to "Smart Login", "No Registration" renamed to "One touch Login" and "Instant Link Login" to "PasswordLess Login".
 - Implemented API Request Signing option: Passed hashed of secret instead of API Secret Key in API Calling.
 - Added Option to Prevent Sending Email Verification.

## Breaking Changes

  APIs have been changed to correctly reflect the format found in the API Docs. As a result a significant amount of methods have to be called with different module or method names. For the updated names and calls, check the Node.JS SDK documentation.
 - module.autoLogin.byEmail replaced with module.smartLogin.byEmail
 - module.autoLogin.byUsername replaced with module.smartLogin.byUsername
 - module.autoLogin.verify replaced with module.smartLogin.verify
 - module.autoLogin.ping replaced with module.smartLogin.ping
 - module.instantLinkLoginByEmail replaced with module.passwordlessLoginByEmail
 - module.instantLinkLoginByUsername  replaced with module.passwordlessLoginByUsername
 - module.instantLinkLoginVerify  replaced with module.passwordlessLoginVerify
 - module.otp.send replaced with module.passwordlessPhoneLoginUsingOTP
 - module.simplifiedRegistrationByEmail replaced with module.oneTouchLoginByEmail
 - module.simplifiedRegistrationByPhone  replaced with module.oneTouchLoginByPhone
 - module.simplifiedRegistrationVerifyOtp  replaced with module.oneTouchLoginVerifyOtp
 - module.twoFactor.emailLogin  replaced with module.mfaEmailLogin
 - module.twoFactor.usernameLogin  replaced with module.mfaUsernameLogin
 - module.twoFactor.phoneLogin replaced with module.mfaPhoneLogin
 - cloudApi replaced with configApi

## Added
 - sendWelcomeEmail API
 - acceptPrivacyPolicy API
 - mfaValidateGoogleAuthCode API
 - mfaReauthenticate API
 - validateMFAByGoogleAuthenticatorCode API
 - validateMFAByBackupCode API
 - validateMFAByOTP API
 - validateMFAByPassword API


# Version 4.3.1

Released on **Aug 9, 2018**

 - Capitalised calling METHOD names.



# Version 4.3.0

Released on **Feb 09, 2018**

 - Added configuration API.
 - Improved structure and naming convention
 - APIKey and APISecret will pass in header in all management APIs
 - Splitted Reset Password by Security Answer into three APIs(by email, phone and username)


# Version 4.2.0

Released on **August 31, 2017**

 - Added No Registration by phone and email APIs.
 - Added Invalidate Phone number APIs.
 - Added create, retrieve, update and delete Custom Registration Data APIs.
 - Added retrive Security Question APIs.
 - Added server side API to generate SOTT.
 - Added Auto Login by Phone and Username.
 - Added email verify Auto Login API.
 - Allows you to set proxy configurations, if you want to setup Http Server Proxy Configuration through your NodeJs SDK.
 - Enhanced Reset password APIs by adding an parater ResetPasswordEmailTemplate to Send Email or SMS on password reset.
 - Enhanced all APIs with projection of fields which allows to select fields that you require as an API response.
 - Enhanced Custom Object Update API by adding an extra parater isAllowedReplace.
 - Enhanced Account profile Update API by adding an extra parater nullSupport.
 - Enhanced Login APIs by adding and extra parameter securityanswer.

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)


# Version 4.1.1

Released on **May 16, 2017**

 - Improved code

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)


# Version 4.1.0

Released on **May 12, 2017**

 - Add start and end time for SOTT to validate it for long time frame.
 - Add API to get server time for SOTT if don't pass the start and end time.
 - Improved SOTT feature.
 - Add Email prompt auto login API.
 - Add Email prompt auto login Ping API
 - Add Role Context and additional permission API

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)


# Version 4.0.0

Released on **April 14, 2017**

## Enhancements

Updated with V2 APIs
 - Added new multiple APIs for better user experience.
 - Improved structure and naming convention
 - Improved security feature
 - Added Phone Authentication APIs to handle phone login,registration and verification etc.
 - Added APIs for two factore authentication
 - Added Rest hook APIs
 - Added web hook APIs
<br>
See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)



# Version 3.2.1
Released on **April 04, 2017**

 - Added Password reset API
 - Improved code
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)


# Version 3.1.1
Released on **August 10, 2016**

 - Added User Verify Email API
 - Added Get Session API
 - Added User Password forgot API
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)


# Version 3.0.6
Released on **May 12, 2016**

 - Improved documentation (Added more examples of endpoint usage)
 - Improved parameter names to match apidocs
 - updated SDK to include all new endpoints at time of release
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)