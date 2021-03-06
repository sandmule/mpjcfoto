import React, { Component } from 'react';
import S3Uploader from './S3Uploader'
import { Container, Row, Col } from 'reactstrap';
import Dashboard from './Dashboard'
import AlbumManagement from './AlbumManagement'
import VideoManagement from './VideoManagement'
import AlbumView from './AlbumManagement/AlbumView'
import {Link, Switch, Route} from 'react-router-dom'
import './admin.css'

class Admin extends Component {
  render() {
    return (
        <Container fluid={true}>
          <Switch>
            <Route exact path="/admin" component={Dashboard}/>
            <Route path="/admin/albums/:id" component={AlbumView}/>
            <Route exact path="/admin/albums" component={AlbumManagement}/>
            <Route exact path="/admin/videos" component={VideoManagement}/>
          </Switch>
        </Container>
    );
  }
}

export default Admin;
