"use strict";

require('./events-browser-polyfill');

const on = function(evt, params) {
  return window.addEventListener(evt, params);
};

const emit = function(evt, params) {
  window.dispatchEvent(new window.CustomEvent(evt, params));
};

module.exports = {
  on: on,
  emit: emit
};
