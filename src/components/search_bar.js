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
  	this.state = { term: 'Starting value' };
  }

  // every class based component must have a render method
  // It's a function
  render() {
  	// must return some JSX
  	// this.onInputChange is a reference to my input handler
  	// {} is to reference JS' variables inside JSX
  	return (
  	  <div>
        <input 
  	  	value = {this.state.term}   // controlled component: its value is set by state
        onChange = {event => this.setState({ term: event.target.value })} />
  	  </div>
  	);
  }

}


export default SearchBar;
