'use strict';

var readFileSync = require('fs').readFileSync;
var path = require('path');
var _ = require('lodash');

module.exports = function (name, ext) {
  ext = ext || 'xml';

  if (!_.isString(name) || !_.isString(ext)) {
    throw new TypeError('name and ext must be strings');
  }

  var fileName = path.join(__dirname, '/../fixture/', name + '.' + ext);

  return readFileSync(fileName, {
    encoding: 'utf-8'
  });
};
