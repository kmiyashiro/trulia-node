'use strict';

var TruliaError = require('./trulia_error');
var _ = require('lodash');

var Trulia = function (apiKey) {
  if (!_.isString(apiKey)) {
    throw new TruliaError('Must pass an API key');
  }

  this.apiKey = apiKey;
};

module.exports = Trulia;
