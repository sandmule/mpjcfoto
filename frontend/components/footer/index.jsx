import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='bcontainer'>
            <a href="https://facebook.com/mpjcfoto/"><FontAwesomeIcon icon={['fab', 'facebook']}/></a>
            <a href="https://instagram.com/mpjcfoto/"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
            <a href="mailto:matt@mpjcfoto.com"><FontAwesomeIcon icon={['fa', 'envelope']}/></a>
            <a href="mailto:samsalter@me.com" className="float-right"><h6>Designed by Sam Salter <FontAwesomeIcon icon={['fa', 'envelope']}/></h6></a>
        </div>
      </footer>
    );
  }
}
