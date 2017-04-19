import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  
  // React will render this array
  const videoItems = props.videos.map((video) => {
  	// If key isn't present, the whole list needs to be re-rendered
  	return (
  	  <VideoListItem 
  	    onVideoSelect = {props.onVideoSelect}
  	    key = {video.etag} 
  	    video = {video} />
  	);
  });

  // If this were a class component, I should access the props like this
  // this.props
  return (
  	<ul className="col-md-4 list-group">
  	  {videoItems}
  	</ul>
  );
};

export default VideoList;
