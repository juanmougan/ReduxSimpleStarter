import _ from 'lodash';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// the most parent component should fetch data
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCi59ri4rwYce45nBWWcU_Tg3DDsgPQu8g';

// Rule: Always ONE component per file!!!
// Create a new component. It should produce HTML
// const = ES6 constant
// App here is a TYPE
// => is a replace for keyword "function"
class App extends Component {
  
  constructor(props) {
  	super(props);

  	this.state = { 
  	  videos: [],
  	  selectedVideo: null
  	};

  	// Default initial search
  	this.videoSearch('surfboards');

  }

  videoSearch(term) {
  	// Setting state means re-render the component
  	YTSearch( {key: API_KEY, term: term}, (videos) => {
  	  // ES6 magic, expands to this.setState({ videos: videos });
  	  // works when key and value are the same string
  	  this.setState({ 
  	  	videos: videos,
  	  	selectedVideo: videos[0]
  	  });
    } );
  }

  // passing props
  render() {

  	const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 );

  	// This is JSX code
  	return (
  	  <div>
  	    <SearchBar onSearchTermChange={videoSearch} />
  	    <VideoDetail video={this.state.selectedVideo} />
  	    <VideoList 
  	      onVideoSelect={ 
  	      	// If videoList calls this function, it will update App's selectedVideo
  	      	selectedVideo => this.setState({selectedVideo}) 
  	      }
  	      videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML, put it on the page
// in the DOM
// If I write <App></App>
// I'm writing an OBJECT of type App
// "container" is the class of the element where we will render this
ReactDOM.render(<App />, document.querySelector('.container'));
