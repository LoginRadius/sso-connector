# Introduction 
ou can leverage this project to create a Shopify Multipass Login URL using the Shopify Multipass Credentials and consumer profile from your application.

### Prerequisite
1. **Shopify Plus Account:** Please see `https://shopify.dev/docs/admin-api/rest/reference/plus/multipass` for how to get Multipass Credential.


### Installation
1. Clone the ShopifyMultipassDemo-nodejs folder to your desired location.
2. Add your Shopify store details under **storeConfig** variable in `src/shopifyMultipassconnector.js`.
3. Add your data mapping object under **dataMap** variable in `src/shopifyMultipass.js`. These data points will be synced from LoginRadius to the Shopify store. 
4. Add profile data object under **userProfile** variable in `src/shopifyMultipass.js`. 
6. In the repo's parent folder run `npm install` this will install any packages necessary for the project.

## Test
-  Run `node server.js` in the project root folder
- It will print the Shopify Login URL  
- Copy the Shopify Login URL and open it in the browser and it will log you in the Shopify store.