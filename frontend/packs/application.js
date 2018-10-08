import Bootstrap from 'bootstrap';
import ujs from 'jquery-ujs'
import Rails from "rails-ujs";
import ReactOnRails from 'react-on-rails';
import PropTypes from 'prop-types';
import React from 'react';
import SiteRouter from 'routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../node_modules/video-react/dist/video-react.css"
import "init";

ReactOnRails.register({
  SiteRouter,
});

library.add(fab)
