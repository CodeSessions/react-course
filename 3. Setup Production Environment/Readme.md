# 3. Setup Production Environment

As a developers, we use a lot of tools to improve our development that are not useful on production, for example the `React DevTools` or not minifying the stylesheet or javascript for a better debugging on browser. 
Using environment variables or configuring webpack for production, will allow us to improve our application's performance. Let's see how to do it!

### ⚽️ Goals: 

  * Create an environment ready to production. 

### 💻 Steps: 

  * Continue from the previous project...
  * Create a `webpack/prod.config.js` file based on `webpack/dev.config.js`.
    * Change `mode` to `production`.
    * Change `devtool` to `cheap-module-source-map`.
  * Install CleanWebpackPlugin: `npm i -D clean-webpack-plugin`.
  * Use **CleanWebpackPlugin** to clean the `dist` folder before build the made by webpack. 
  * Use **DefinePlugin** to define a `NODE_ENV` environment variable on both webpack files (development and production).
  * To allow webpack cut the bundle file in multiple bundles and improve the web **optimization**, add those lines: 
    ```javascript 
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    ```
  * Setup a **performance** options in webpack to improve it: 
    ```javascript
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
    ```
  * Update `src/index.js` file to display different message on production and development environments.
  * Create a `start-prod` script on `package.json` and update the `build` script pointing both scripts to `webpack/prod.config.js`.
    ```json
    "scripts": {
      "start-prod": "webpack-dev-server --config webpack/prod.config.js --open",
      "build": "webpack --config webpack/prod.config.js"
    }
    ```
  * Run `npm run start-prod` and see it working!

### ⏭ Next chapter: [4. Hello React](../4.%20Hello%20React/Readme.md)

### ⏮ Previous chapter: [2. Setup Development Environment](../2.%20Setup%20Development%20Environment/Readme.md)

### ℹ️ Back to: [Index](../README.md)
