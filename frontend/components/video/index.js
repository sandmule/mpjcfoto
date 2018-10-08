import "./video.css";
import React, { Component } from 'react';
import { Player } from 'video-react';

class Video extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Video - Work in Progress; just testing</h2>
        </div>
          <Player
            playsInline
            fluid={true}
            poster="https://s3.eu-west-2.amazonaws.com/mpjcfoto-test/video_thumbnail/SampleVideo_720x480_10mb.png"
            src="https://s3.eu-west-2.amazonaws.com/mpjcfoto-test/s/SampleVideo_720x480_10mb.mp4"
          />
      </div>
    );
  }
}

export default Video;
