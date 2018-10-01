const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
const path = require('path');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  tether: 'tether',
  InfiniteScroll: 'infinite-scroll',
  Tether: 'tether',
  jqueryujs: 'jquery-ujs',
  'window.Tether': 'tether',
  Popper: ['popper.js', 'default'],
  Sortable: 'sortablejs',
  FooTable: 'footable',
  Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
  Button: 'exports-loader?Button!bootstrap/js/dist/button',
  Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
  Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
  Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
  Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
  Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
  Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
  Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
  Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
  Util: 'exports-loader?Util!bootstrap/js/dist/util',
}));

module.exports = environment
