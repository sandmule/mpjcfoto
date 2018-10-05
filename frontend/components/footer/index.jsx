import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='bcontainer'>
          <ul>
            <li><a href="https://facebook.com/mpjcfoto/">Facebook</a></li>
            <li><a href="https://instagram.com/mpjcfoto/">Instagram</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
