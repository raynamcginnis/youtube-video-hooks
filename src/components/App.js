import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoItem";

// when term is submitted, a request is set to youtube api search with the query string of the term searched
class App extends React.Component {
//initialize state
state = { videos: [], 
          selectedVideo: null
        };


  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {this.onVideoSelect}
        videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
