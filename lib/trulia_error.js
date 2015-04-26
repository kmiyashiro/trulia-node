'use strict';

// Taken from https://github.com/tarunc/intercom.io/blob/master/lib/IntercomError.js
var util = require('util');

function AbstractError(message, constr) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, constr || this);

  this.name = 'AbstractError';
  this.message = message;
}

util.inherits(AbstractError, Error);

function TruliaError(message) {
  AbstractError.apply(this, arguments);
  this.name = 'TruliaError';
  this.message = message;
}

util.inherits(TruliaError, AbstractError);

module.exports = TruliaError;
