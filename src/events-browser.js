"use strict";

require('./events-browser-polyfill');

var on = function(evt, params, options) {
  var target = options && options.target ? options.target : window.document;
  return target.addEventListener(evt, params);
};

var emit = function(evt, params, options) {
  var target = options && options.target ? options.target : window.document;
  return target.dispatchEvent(new window.CustomEvent(evt, params));
};

module.exports = {
  on: on,
  emit: emit
};
