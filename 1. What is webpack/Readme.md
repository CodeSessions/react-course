# 1. What is webpack?

[Webpack](https://webpack.js.org/) is a static module bundler for modern JavaScript applications. 

On this first chapter, we will build the javascript on a new file (thanks to webpack) and show the result in a browser.

### ⚽️ Goals: 

  * Learn how to install NPM packages.
  * Learn the basics of webpack.

### 💻 Steps: 

  * Init NPM project: `npm init`.
  * Create an entry script: `./src/index.js`.
    * Create a *Hello World* message with **javascript**.
      ```javascript
      document.getElementById('root').innerText = 'Hello World from Webpack';
      ```
  * Install Webpack: `npm i -D webpack-cli webpack`.
  * Create and configure a `webpack.config.js`: 
    * Setup as a `development` mode.
    * Set an `entry` point to `./src/index.js`.
    * Set an `output` point to `./dist` folder. Set the `path`,`filename` and `publicPath`.
    * Setup a `devtool` as a `#source-map`.
  * Run webpack:
    * Create a `build` script on `package.json` to run webpack.
    * Run webpack.
    * A `dist` folder should bee created with the code.
  * Create an `index.html`: 
    * Add a reference to the output bundle.
    * Add a `div` with `id="root"`.
  * Open `index.html` in a browser to test output.

### ⏭ Next chapter: [2. Setup Development Environment](../2.%20Setup%20Development%20Environment/Readme.md)

### ℹ️ Back to: [Index](../README.md)
