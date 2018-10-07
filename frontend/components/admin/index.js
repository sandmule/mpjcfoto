import React, { Component } from 'react';
import S3Uploader from './S3Uploader'
import { Container, Row, Col } from 'reactstrap';
import Logout from './Logout'
import './admin.css'

class Admin extends Component {
  render() {
    return (
        <Container fluid={true}>
            <Row>
              <Col><h2 className='display-4 title'>Admin Panel</h2></Col>
            </Row>

            <Row>
              <Col md={{ size: 'auto' }}><S3Uploader /></Col>
              <Col md={{  offset: 11 }}><Logout /></Col>
            </Row>
        </Container>
    );
  }
}

export default Admin;
