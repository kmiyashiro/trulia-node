'use strict';

var request = require('../../lib/request');
var xmlParser = request.parse['application/xml'];
var getFixture = require('../support/get_fixture');
var fs = require('fs');

var fixtureFiles = fs.readdirSync(__dirname);
var fixtures = {};

// Populate fixtures with XML passed through superagent parser
fixtureFiles.forEach(function (filename) {
  var matches = filename.match(/(.*)?\.xml$/);

  if (!matches || !matches[1]) {
    return;
  }

  var name = matches[1];

  xmlParser(getFixture(name), function(err, res) {
    fixtures[name] = res;
  });
});

module.exports = fixtures;
