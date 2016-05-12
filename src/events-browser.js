"use strict";

require('./events-browser-polyfill');

const on = (evt, params) => window.addEventListener(evt, params);
const emit = (evt, params) => window.dispatchEvent(new window.CustomEvent(evt, params));

module.exports = {
  on: on,
  emit: emit
};
