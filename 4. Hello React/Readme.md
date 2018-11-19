# 4. Hello React

[React](https://reactjs.org/) is a JavaScript library for building user interfaces. 

On this chapter, we will write our first component to say Hello World!

### ⚽️ Goals: 
  * Add React library to our application.
  * Create our first component. 

### 💻 Steps: 

  * Continue from the previous project...
  * Install react: `npm i -S react`.
  * Install react-dom: `npm i -S react-dom`.
   * Install babel: `npm i -D @babel/core @babel/preset-react babel-loader`.
  * At `./webpack/common.config.js`:
    * Add babel suport for react: 
      ```javascript
      module: {
        rules: [
          // JSX? - Files - BABEL
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        },
      ],
      ```
  * At `./src`:
    * Create a `components` folder.
    * <span style="color:#ffc107">[ ❗ Recomendation ❗ ]:</span> Create an `index.js` file at `components` folder which exports all the components.
    * Inside this new folder, create a component: `App.jsx`. This component should render the same message as `./src/index.js` file. <span style="color:#ffc107">[ ❗ Recomendation ❗ ]:</span> write each component inside its own folder, it will help you build an scalable application.
    * To improve all import file on the app, create a `package.json` file like the example bellow on every component folder: 
      ```json
      {
        "name": "App",
        "main": "App.jsx",
        "private": true,
        "version": "1.0.0"
      }
      ```
  * Rename the `./src/index.js` to `./src/index.jsx` and:
    * Import our new component `App.jsx`.
    * Use React and ReactDOM libraries, to render our App component inside the root node. 
  * Run the app and check if everything is working fine.

### <span style="color:#ffc107">[ ❗ Recomendation ❗ ]:</span> Install [React DevTools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation) browser plugin

### ⏭ Next chapter: [5. Styling](../5.%20Styling/Readme.md)

### ⏮ Previous chapter: [3. Setup Production Environment](../3.%20Setup%20Production%20Environment/Readme.md)

### ℹ️ Back to: [Index](../README.md)
