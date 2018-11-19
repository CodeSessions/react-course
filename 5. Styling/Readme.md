# 5. Styling

In most of  your projects, you will need to style it a little bit. You might use some style libraries (e.g. Bootstrap) or create your theme from scratch. 

On this chapter, we want to learn how to use your theme on a React application. Let's go!

### ⚽️ Goals: 
  * Add CSS / SASS support to our React project. 
  * Use Bootstrap to style our application.

### 💻 Steps: 

  * Continue from the previous project...
  * Install dependencies: `npm i -D css-loader style-loader sass-loader node-sass`.
  * At `./webpack/common.config.js`:
    * Configure webpack to bundle CSS files.
      ```javascript 
        { 
          test: /\.css$/, 
          loaders: ['style-loader', 'css-loader']
        },
      ```
    * Configure webpack to bundle SASS files.
      ```javascript 
        { 
          test: /\.(sa|sc)ss$/, 
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
      ```
  * Add a stylesheet to our component.
    * At `./src/components/App`: 
      * Create an `App.css` file with some css class.
      * Import `App.css` into `App.jsx`.
      * Apply the class to the component.
  * Run the application and see how it's working.
  * Installing bootstrap: `npm i -S bootstrap`.
  * Create a `./src/theme` folder: 
    * Create a `bootstrap/variables.scss` file and copy the variables file from  `bootstrap` library.
    * Create a `bootstrap/bootstrap.scss` file to import `bootstrap` library.
      * Import `functions` file from bootstrap library. 
      * Import `variables` file created by us.
      * Import `bootstrap` file from bootstrap library.
    * Create a `main.scss` and import `boostrap` file.  
  * Import `main.scss` file into `index.jsx`;
  * Apply [Bootstrap Grid System](https://getbootstrap.com/docs/4.1/layout/grid/) to our `App.jsx` component. 
  * If you run the app, you should see a new look and feel.

### ⏭ Next chapter: [6. What is a Prop](../6.%20What%20is%20a%20Prop/Readme.md)

### ⏮ Previous chapter: [4. Hello React](../4.%20Hello%20React/Readme.md)

### ℹ️ Back to: [Index](../README.md)
