'use strict';

var Trulia = require('../lib/trulia');
var TruliaError = require('../lib/trulia_error');
var fixtures = require('./fixture');

var assert = require('chai').assert;

describe('Trulia', function () {
  var subject;

  beforeEach(function () {
    subject = new Trulia('fakeApiKey');
  });

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

  describe('#getNeighborhoodsInCity', function () {
    it('should send a GET request', function () {
      var promise = subject.getNeighborhoodsInCity();

      assert.isFunction(promise.then);
      assert.eventually.ok(promise);

      return assert.becomes(promise, {
        data: fixtures['getNeighborhoodsInCity']
      });
    });
  });
});
