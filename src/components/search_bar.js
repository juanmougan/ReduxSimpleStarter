import React, { Component } from 'react';
// this is syntactic sugar for this (equivalent)
// const Component = React.Component

// Functional component: literally, a function
// Class component
class SearchBar extends Component {
  // every class based component must have a render method
  // It's a function
  render() {
  	// must return some JSX
  	return <input />;
  }
}


export default SearchBar;
