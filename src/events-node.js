"use strict";

const Events = require('events');

class Emmiter extends Events {}
const emmiter = new Emmiter();

module.exports = emmiter;
