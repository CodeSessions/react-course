# 6. What's a prop?

We use **props** to pass data from a parent to a child component. Those data is inmutable, so only a parent component can change the data passed to his child. 
Let's see this in action!

### ⚽️ Goals:
  * Understand what's a prop in a React Component. 

### 💻 Steps: 

  * Continue from the previous project...
  * Install dependencies: `npm i -S prop-types`.
  * At `./src/components/App/App.jsx`:
    * Define a `text` prop (using prop-types library) and set his default value.
    * Display this prop on your component render method.
    * If you have defined the PropTypes and DefaultProps as a class property, you will get a compile error related with `@babel/plugin-proposal-class-properties` plugin. You should install it and add it as a rule-plugin of `.jsx` files.
  * At `./src/index.jsx`:
    * Send the new prop to `App` component with a new value.    

### ⏭ Next chapter: [7. Multiple Components](../7.%20Multiple%20Components/Readme.md)

### ⏮ Previous chapter: [5. Styling](../5.%20Styling/Readme.md)

### ℹ️ Back to: [Index](../README.md)
