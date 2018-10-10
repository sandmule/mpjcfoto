import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import VideoGallery from './VideoManagement/VideoGallery'

class VideoManagement extends Component {
  render() {
    return (
            <div>
              <Row>
                <Col>
                 <Breadcrumb>
                   <Breadcrumb.Item componentClass="div"><Link to='/admin'>Home</Link>/</Breadcrumb.Item>
                   <Breadcrumb.Item active>Video Management</Breadcrumb.Item>
                 </Breadcrumb>
               </Col>
               </Row>
               <Row>
                <Col><VideoGallery /></Col>
              </Row>
          </div>
    );
  }
}

export default VideoManagement;
