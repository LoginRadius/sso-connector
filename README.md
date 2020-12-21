# Introduction 

Welcome to the open-source LoginRadius SSO project. Please review this README file to understand how you can assist in contributing to the existing SSO connectors OR build new SSO connectors.

There are some applications that do not support industry-standard federated SSO methods like  SAML, Oauth/OIDC, JWT, WS Federation, etc., and provide their own mechanism e.g. Shopify Multipass Login to create a Single Sign-On workflow for identity provider applications. SSO Connector solutions create a Single Sign-on user experience between your applications and these applications by leveraging these mechanisms.

# Getting Started

## Shopify Multipass SSO connector

You can leverage this project to create a Shopify Multipass Login URL using the Shopify Multipass Credentials and consumer profile from your application. The Shopify Multipass Login URL seamlessly logs the consumer in with the same email address the consumer used to signup on your web application. If no account with that email address exists in the Shopify Store, one is created in the Shopify Store.

## Shopify Folder Structure

There are two subfolders LRShopifyMultipass-nodejs and ShopifyMultipassDemo in the Shopify Folder. 
- LRShopifyMultipass-nodejs: The LRShopifyMultipass-nodejs contains a demo for SSO workflow between LoginRadius and Shopify application using the SSO connector code. 
- ShopifyMultipassDemo-nodejs: The ShopifyMultipassDemo-nodejs contains a demo for how to create an SSO connector using the profile data and Shopify multipass credential.  

## LRShopifyMultipass-nodejs

### Prerequisite
1. **LoginRadius Account:** If you don't have a LoginRadius account, you can create a free account at the [LoginRadius](https://www.loginradius.com/pricing/) website.
2. **Shopify Plus Account:** Please see the [Shopify Multipass](https://shopify.dev/docs/admin-api/rest/reference/plus/multipass) document for how to get Multipass Credentials.


### Installation
1. Clone the **LRShopifyMultipass-nodejs** folder to your desired location
2. Add your LoginRadius API Key, App Name, and SOTT value in `demo/assets/js/options.js`. 
3. Add your LoginRadius API Key, App Name, and APP secret in `server.js`.

Please see the LoginRadius [API key and Secret](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret) and [SOTT](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/#sott-secured-one-time-token-) documents for how to get these values for your LoginRadius Account.

4. Add your Shopify store details under **storeConfig** variable in `src/shopifyMultipass.js`.
5. Add your data mapping object under **dataMap** variable in `src/shopifyMultipass.js`. These data points will be synced from LoginRadius to Shopify store. 
6. In the repo's parent folder run `npm install` this will install any packages necessary for the project.

7. Once everything is installed type `node server.js`.

### Test

- Open `http://localhost:3000/demo` in your browser
- Create a LoginRadius user account using the registration form on the demo
- Login into the demo and navigate to **Shopify Store** on the profile page.
- Click the **Redirect to Shopify Store** button and it will log you in to the Shopify store.

## ShopifyMultipassDemo-nodejs

### Prerequisite
1. **Shopify Plus Account:** Please see the [Shopify Multipass](https://shopify.dev/docs/admin-api/rest/reference/plus/multipass) document for how to get Multipass Credentials.

### Installation
1. Clone the ShopifyMultipassDemo-nodejs folder to your desired location.
2. Add your Shopify store details under **storeConfig** variable in `src/shopifyMultipassconnector.js`.
3. Add your data mapping object under **dataMap** variable in `src/shopifyMultipass.js`. These data points will be synced from LoginRadius to the Shopify store. 
4. Add profile data object under **userProfile** variable in `src/shopifyMultipass.js`. 
6. In the repo's parent folder run `npm install` this will install any packages necessary for the project.

### Test
-  Run `node server.js` in the project root folder
- It will print the Shopify Login URL  
- Copy the Shopify Login URL and open it in the browser and it will log you in the Shopify store.

## Open Source Contributions

We welcome open source contributions and  It's important to note that by making a pull request, you are agreeing to make the code changes available under the MIT license for others to use freely. You can contribute to the SSO Connector project in the following ways: 
- Create SSO Connector for other applications. Here are some suggestions:
    1. Bigcommerce
    2. PerfectMind
    3. 
- Create Shopify connector in other programming languages like .net, PHP, etc.
- Suggest improvement in the current Shopify SSO connector code

## License

[MIT](LICENSE)
