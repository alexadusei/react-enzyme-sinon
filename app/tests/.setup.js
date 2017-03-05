// For the best experience with Enzyme, this setup file is necessary to set up
// a document in the global scope before requiring React.
// Source: https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

require('babel-register')();
require('babel-polyfill');
require('ignore-styles');

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
})

global.navigator = {
  userAgent: 'node.js'
}
