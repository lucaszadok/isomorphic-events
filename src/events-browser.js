"use strict";

require('./events-browser-polyfill');

const on = function(evt, params, options) {
  const target = options && options.target ? options.target : window;
  return target.addEventListener(evt, params);
};

const emit = function(evt, params, options) {
  const target = options && options.target ? options.target : window;
  return target.dispatchEvent(new window.CustomEvent(evt, params));
};

module.exports = {
  on: on,
  emit: emit
};
