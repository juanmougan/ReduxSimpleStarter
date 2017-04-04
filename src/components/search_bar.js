import React, { Component } from 'react';
// this is syntactic sugar for this (equivalent)
// const Component = React.Component

// Functional component: literally, a function
// Class component
class SearchBar extends Component {
  
  // Each time state changes, Component will be re-rendered
  
  // Initialize state inside the class' constructor
  // First function called when obj is instantiated
  constructor(props) {
  	super(props);
  	this.state = { term: '' };
  }

  // every class based component must have a render method
  // It's a function
  render() {
  	// must return some JSX
  	// this.onInputChange is a reference to my input handler
  	// {} is to reference JS' variables inside JSX
  	return <input onChange = {event => console.log(event.target.value)} />;
  }

}


export default SearchBar;
