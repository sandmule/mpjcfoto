import React, { Component } from 'react';
import S3Uploader from './S3Uploader'
import { Container, Row, Col } from 'reactstrap';
import {Link, Switch, Route} from 'react-router-dom'
import { Button } from 'reactstrap';
import Logout from './Logout'

class Dashboard extends Component {
  render() {
    return (
        <Container fluid={true}>
            <Row>
              <Col><h2 className='display-4 title'>Admin Panel</h2></Col>
            </Row>
            <Row>
              <Col md={{ size: 'auto' }}><S3Uploader /><Link to='/admin/albums'><Button color="primary album-button">Album Management</Button></Link></Col>
              <Col md={{  offset: 11 }}><Logout /></Col>
            </Row>
        </Container>
    );
  }
}

export default Dashboard;
