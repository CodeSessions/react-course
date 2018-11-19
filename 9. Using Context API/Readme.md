# 9. Using Context API

The Context API is one of the most newest features in React. It gives us the possibility to store data and get it in component. If you know something regarding Redux, it's quite similar. If you have a big tree of components and need to pass information in each component, with Context API you can prevent this.

Let's play with Context!

### ⚽️ Goals:
  * Understand how to use Context API.

### 💻 Steps: 

  * Continue from the previous project...
  * Create a `./src/context/index.js` and create a React Context.
  * Create a `./src/context/provider.js`.
  * At `./src/context/provider.js`: 
    * Create a component named Provider.
    * Return a **React Context Provider** with children inside it. 
    * Move the state from `App.jsx` to here.
    * Set this state as value of our provider.
  * At `./src/index.jsx`:
    * Import `Provider`.
    * Wrap the `App` component with our new `Provider`.
  * At `Person` component:
    * Import `Context`.
    * Wrap all UI content by **React Context Consumer**
    * To get the context, inside **React Context Consumer** you can do it by: 
      ```javascript 
      {
        (context) => (
          // ...
        )
      }
      ```
    * Use the context state to display the values instead of component props.
    * Clean all useless state defined on previous chapters.
  * If you run the app, you should see the same as previous chapters but working with Context API. 
  * At `Provider` component:
    * Define a `_increaseAge` method and write the logic.
    * Add this method on the value of provider.
  * At `App` component:
    * Bind the button to the new context method.
  * See all is working fine!!
  
### ⏮ Previous chapter: [8. What is State](../8.%20What%20is%20State/Readme.md)

### ℹ️ Back to: [Index](../README.md)
