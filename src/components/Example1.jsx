import { Component } from 'react';
import { Player } from './Player';
import { VideoList } from './VideoList/videolist';
import videos from './data/data.json';

export class Example1 extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
        <div style={{padding: 24}}>
            <h1>Selected video {this.state.selectedVideo}</h1>
            <VideoList videos={videos} onSelect={this.selectVideo}/>
            <Player url={this.state.selectedVideo} />
        </div>
    )
  }
}
