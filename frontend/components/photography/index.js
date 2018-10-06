import "./photography.css";
import React, { Component } from 'react';
import PhotoGallery from './Gallery';
import {Link, Switch, Route} from 'react-router-dom'
import AlbumView from './AlbumView'

class Photography extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <Switch>
            <Route path="/photography/:id" component={AlbumView}/>"
            <Route exact path="/photography" component={PhotoGallery}/>"
          </Switch>
      </div>
    );
  }
}

export default Photography;
