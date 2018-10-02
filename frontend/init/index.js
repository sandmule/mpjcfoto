import "./index.css";
import ReactOnRails from 'react-on-rails';

const csrfToken = ReactOnRails.authenticityToken();
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : csrfToken
};
