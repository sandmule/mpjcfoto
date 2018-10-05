import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink as Link} from 'react-router-dom'
import './navbar.css'

export default class Layout extends Component {
  render() {
    const local = window.location.pathname === '/' ? 'bnav-light' : 'bnav-dark'
    return (
      <section>
        <header className={`${local} bnavbar`}>
          <div className="bcontainer">
            <h1>MPJC Foto</h1>
            <nav>
              <ul>
                <li><Link exact activeClassName='is-active' to="/">Home</Link></li>
                <li><Link activeClassName='is-active' to="/contact">Contact</Link></li>
                <li><Link activeClassName='is-active' to="/photography">Photography</Link></li>
                <li><Link activeClassName='is-active' to="/video">Video</Link></li>
                <li><Link activeClassName='is-active' to="/design">Design</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        {this.props.children}
      </section>
    );
  }
}
