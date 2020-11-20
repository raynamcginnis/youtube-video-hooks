import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div class="ui segment">
    <p></p>
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>
  }

  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`


   return <div>
     <div className="ui embed">
     <iframe title="video-player" src={videoSrc} allowFullScreen />
     </div>
     <div class="ui segment">
       <h4 className="ui header">{video.snippet.title}</h4>
       <p>{video.snippet.description}</p>
       </div>
   </div>
};

export default VideoDetail;