import "./video.css";
import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import VideoViewer from './VideoViewer'
import VideoGallery from './VideoGallery';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <Switch>
          <Route path="/video/:id" component={VideoViewer}/>"
          <Route exact path="/video" component={VideoGallery}/>"
        </Switch>
      </div>
    );
  }
}

export default Video;
