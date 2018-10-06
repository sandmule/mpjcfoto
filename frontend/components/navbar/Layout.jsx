import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink as Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap';

import './navbar.css'

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const local = window.location.pathname === '/' ? 'bnav-light' : 'bnav-dark'
    return (
      <section>
        <Navbar light expand="md" className={`fixed-top bnavbar flex-row-reverse`}>
            <NavbarBrand className='nav-brand'>MPJC Foto</NavbarBrand>
            <NavbarToggler onClick={this.toggle}  className='navbar-toggler'/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={`ml-auto ${local} menu-order`} navbar>
                <NavItem>
                  <LinkContainer exact activeClassName='is-active' to='/'>
                    <NavLink>Home</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer activeClassName='is-active' to='/contact'>
                    <NavLink>Contact</NavLink>
                </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer activeClassName='is-active' to='/photography'>
                    <NavLink>Photography</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer activeClassName='is-active' to='/video'>
                    <NavLink>Video</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer activeClassName='is-active' to='/design'>
                    <NavLink>Design</NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        {this.props.children}
      </section>
    );
  }
}
