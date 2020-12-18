# Introduction 

Welcome to the open-source LoginRadius SSO project. Please review this README file to understand how you can assist in contributing to the exsiting SSO connectors and build new SSO connectors.

There are some applications that do not support industry-standard federated SSO methods like  SAML, Oauth/OIDC, JWT, WS Federation, etc. and provide their own mechanism e.g. Shopify Multipass Login to create a Single Sign-On workflow for identity provider applications. SSO Connector solutions creates a Single Sign-on user experience between your applications and these applications by leveraging these mechanisms.

# Getting Started

## Shopify Multipass SSO connector

You can leverage this project to create a Shopify Multipass Login URL using the Shopify Mulitpass Credentials and consumer profile from your application. The Shopify Multipass Login URL seamlessly logs the consumer in with the same email address the consumer used to sign up on the your  web application. If no account with that email address exists in the Shopify Store, one is created in the Shopify Store.

## Installation

1. Clone the repo to your desired location
2. Add your LoginRadiusV2.js and IDX options e.g. API Key and Secret in `static/idx-options.js`. 

3. In the repo's parent folder run `npm install` this will install any packages necessary for the project.

4. Once everything is installed type `npm run start` to get webpack to start serving the JavaScript.

5. Visit `http://localhost:8080/`

## Development

All of the code is in the `src` folder, the main code logic is in `main.js` and the styling that depends on JavaScript is located in `styles.js`.

## Build and Test

Once you're ready to do a release of the identity experience framework, follow the steps below:

`npm run build`

This will build a javascript file in the `build` folder that you can grab and use for the release.


## Build Process

The build process is as follows; There are 2 webpack configuration files each one of them has a different build process based on your requirements, in package.json if you look at the `"scripts"` field you will see what they represent.

1. webpack.dev.config.js: configuration is used when running `npm run start` it deploys all of the assets in a convenient way that the IDX Framework can be tested and developed using hot reload.

2. webpack.prod.config.js: triggered when `npm run build` is run, it creates a "build" folder with only the necessary assets to deploy to production, webpack.prod.config.js contains 2 different configuration objects, the first one is to generate the main file `idx-selfhosted.x.x.x.js` which is an unminified version of the IDX Framework. The second config object is used to provide a minified version of the framework's JavaScript named `idx-selfhosted.1.3.0.min.js`.

*Note:* Webpack requires an entry point into your code in order to bunde the code, in the `src` folder where most of the code is located, the `index.js` is the entry point for the production configs, `webpack.prod.config.js` while for development we need to load different JavaScript code and as such the entry point for `webpack.dev.config.js` is the `index-dev.js` file.

## Open Source Contributions

We welcome open source contributions, please see make sure you read the steps below before making any pull request.

1. Make sure that the code can build via `npm run build`.

2. Do not include the built files (the output of `npm run build`), the LoginRadius team will handle building the files and setting the version when the next release is scheduled.

3. It's important to note that by making a pull request, you are agreeing to make the code changes available under the MIT license for others to use freely.

## License

[MIT](LICENSE)
