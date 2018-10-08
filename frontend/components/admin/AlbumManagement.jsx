import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import PhotoGallery from './AlbumManagement/Gallery'

class AlbumManagement extends Component {
  render() {
    return (
            <div>
              <Row>
                <Col>
                 <Breadcrumb>
                   <Breadcrumb.Item componentClass="div"><Link to='/admin'>Home</Link>/</Breadcrumb.Item>
                   <Breadcrumb.Item active>Album Management</Breadcrumb.Item>
                 </Breadcrumb>
               </Col>
               </Row>
               <Row>
                <Col><PhotoGallery /></Col>
              </Row>
          </div>
    );
  }
}

export default AlbumManagement;
