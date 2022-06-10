# Introduction 

Welcome to the open-source LoginRadius SSO project. Please review this README file to understand how you can assist in contributing to the existing SSO connectors OR build new SSO connectors.

There are some applications that do not support industry-standard federated SSO methods like  SAML, Oauth/OIDC, JWT, WS Federation, etc., and provide their own mechanism, e.g., Shopify Multipass Login, to create a Single Sign-On workflow for identity provider applications. SSO Connector solutions create a Single Sign-on user experience between your applications and these applications by leveraging these mechanisms.

# Getting Started

## Folder Structure

There are two subfolders LoginRadius and SSOconnector. 

**LoginRadius:** This folder contains all the files for a demo project leveraging LoginRadius Node.js SDK. The demo projects shows how to  perform user authetnication to LoginRadius  and create seamless SSO between LoginRadius and SSO stores, e.g., Shopify. 

**SSOConnector:** The SSOConnector contains a demo for how to create an SSO connector between your application and stores, e.g., Shopify, BigCommerce using the SSO mechanism provided by these stores.

 - **Shopify:** You can leverage this project to create a Shopify SSO Login URL using the Shopify Multipass Credentials and consumer profile from your application. The Shopify Multipass Login URL seamlessly logs the consumer in with the same email address the consumer used to signup on your web application. If no account with that email address exists in the Shopify Store, one is created in the Shopify Store.
 - **BigCommerce:** You can leverage this project to create a BigCommerce SSO Login URL using the BigCommerce Store Credentials and BigCommerce Customer Id. The BigCommerce JWT Login URL seamlessly logs the consumer in with the BigCommerce Customer Id.

### Prerequisite
1. **LoginRadius Account:** If you don't have a LoginRadius account, you can create a free account at the [LoginRadius](https://www.loginradius.com/pricing/) website.
2. **Shopify Plus Account:** Please see the [Shopify Multipass](https://shopify.dev/docs/admin-api/rest/reference/plus/multipass) document for how to get Multipass Credentials.

2. **BigCommerce Account:**  If you don't have a BigCommerce account, you can create a trial account at the [BigCommerce](https://www.bigcommerce.com/start-your-trial/) website.

### Installation
1. Clone the **SSO-CONNECTOR** folder to your desired location
2. Add your LoginRadius API Key, App Name, and SOTT value in `demo/assets/js/options.js`. 
3. Add your LoginRadius API Key, App Name, and APP secret in `server.js`.

   Please see the LoginRadius [API key and Secret](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret) and [SOTT](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/#sott-secured-one-time-token-) documents for how to get these values for your LoginRadius Account.

4. Add your Shopify store details under **storeConfig** variable in `SSOConnector/shopifyMultipass.js`.
4. Add your Shopify store details under **storeConfig** variable in `SSOConnector/shopifyMultipass.js`.

6. In the `LoginRadius/src` folder, open CMD and run `npm install`. this will install any packages necessary for the project.

7. Once everything is installed, run `node server.js` in CMD.

**Note:** For Security best practices, we should not store any credentials in plain text in the server file. 

### Test

- Open `http://localhost:3000/demo` in your browser
- Create a LoginRadius user account using the registration form on the demo
- Login into the demo and navigate to **SSO Connector** on the profile navigation page.
- Click the **Navigate to Shopify Store** button and it will log you in to the Shopify store.

## Open Source Contributions

We welcome open source contributions and  It's important to note that by making a pull request, you are agreeing to make the code changes available under the MIT license for others to use freely. You can contribute to the SSO Connector project in the following ways: 
- Create SSO Connector for other applications. Here are some suggestions:
    1. Bigcommerce
    2. 
- Create Shopify connector in other programming languages like .net, PHP, etc.
- Suggest improvement in the current SSO connector code

## License

[MIT](LICENSE)
