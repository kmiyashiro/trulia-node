'use strict';

var getFixture = require('./support/get_fixture');
var fixture = getFixture('getNeighborhoodsInCity');
var assert = require('chai').assert;
var request = require('../lib/request');

describe('Request', function () {
  describe('XML parser', function () {
    var subject = request.parse['application/xml'];
    var result;

    beforeEach(function (done) {
      subject(fixture, function (err, res) {
        result = res;
        done();
      });
    });

    it('should return an Array', function () {
      assert.isArray(result);
    });
  });
});
