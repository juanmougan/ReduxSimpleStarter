import React from 'react';

const VideoList = (props) => {
  // If this were a class component, I should access the props like this
  // this.props
  return (
  	<ul className="col-md-4 list-group">
  	  {props.videos.length}
  	</ul>
  );
};

export default VideoList;
