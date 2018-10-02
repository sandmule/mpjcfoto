import Bootstrap from 'bootstrap';
import ujs from 'jquery-ujs'
import Rails from "rails-ujs";
import ReactOnRails from 'react-on-rails';
import PropTypes from 'prop-types';
import React from 'react';
import SiteRouter from 'routes';
import "init";

ReactOnRails.register({
  SiteRouter,
});
