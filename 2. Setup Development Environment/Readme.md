# 2. Setup Development Environment

As a developers, we use a lot of development tools to help us on write better applications, debugging, devServer, etc. 

On this chapter we will build a basic dev ecosystem to build any application.

### ⚽️ Goals: 

  * Create an environment ready to development.

### 💻 Steps: 

  * Continue from the previous project...
  * Install webpack-dev-server: `npm i -D webpack-dev-server`.
  * Install html-webpack-plugin: `npm i -D html-webpack-plugin`.
  * Install webpack-merge: `npm i -D webpack-merge`.
  * Let's go to reconfigure **webpack for development**: 
    * Create a `webpack` folder on root.
    * Move inside and rename the `webpack.config.js` file to `common.config.js`.
    * Create a `webpack/config.js` file. This file should return an object with:
      * Some paths: 
        * `root`: this is the root of the project.
        * `dist`: folder where webpack will build the project.
        * `src`: folder where you will develop the application.
      * Two new variables, will be helpful in the future.
        ```javascript
        filename: '[name]-[hash]'
        chunkFilename: '[name]-[chunkhash]'
        ```
    * Go to `webpack/common.config.js` and rewrite the code using the variables created on previous step. 
    * Create a `webpack/dev.config.js` file and use **webpack-merge** to merge the `common.config.js` with an empty object. 
      * Update the empty object and add the `mode` and `devtool` properties. Remove those two from `common.config.js`.
      * Move the `index.html` inside `src/` folder and remove the reference to `bundle.js`.
      * Configure the **HtmlWebpackPlugin**. Setup a `template` and `inject` to body.
    * Update the `build` script on `package.json`: (On this time, we should have the same result as previous chapter but improved. Try it executing the script with `npm run build`)
      ```json
      "scripts": {
        "build": "webpack --config webpack/dev.config.js"
      },
      ```
  * Create a `start` script on `package.json`. This should use webpack-dev-server to launch the application in a localhost.
    ```json
    "scripts": {
      "start": "webpack-dev-server --config webpack/dev.config.js --open",
      "build": "webpack --config webpack/dev.config.js"
    },
    ```
  * Run `npm run start` and see it working!

### ⏭ Next chapter: [3. Setup Production Environment](../3.%20Setup%20Production%20Environment/Readme.md)

### ⏮ Previous chapter: [1. What is webpack](../1.%20What%20is%20webpack/Readme.md)

### ℹ️ Back to: [Index](../README.md)
