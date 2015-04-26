'use strict';

var Trulia = require('../lib/trulia');
var TruliaError = require('../lib/trulia_error');

var assert = require('chai').assert;

describe('Trulia', function () {
  describe('constructor', function () {
    it('should throw if no API key passed', function () {
      assert.throws(function () {
        new Trulia();
      }, TruliaError);
    });

    it('should attach API key to self', function () {
      var subject = new Trulia('hi there');

      assert.strictEqual(subject.apiKey, 'hi there');
    });
  });
});
