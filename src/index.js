import React from 'react'
import ReactDOM from 'react-dom'

// Rule: Always ONE component per file!!!
// Create a new component. It should produce HTML
// const = ES6 constant
// App here is a TYPE
// => is a replace for keyword "function"
const App = => () {
  // This is JSX code
  return <div>Hi!</div>;
}

// Take this component's generated HTML, put it on the page
// in the DOM
// If I write <App></App>
// I'm writing an OBJECT of type App
// "container" is the class of the element where we will render this
ReactDOM.render(<App />, document.querySelector('.container'));
