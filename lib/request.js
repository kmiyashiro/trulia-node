'use strict';

var request = require('superagent-bluebird-promise');
var parseString = require('xml2js').parseString;

request.parse['application/xml'] = function (res, fn) {
  parseString(res, function(err, res) {
    if (err) {
      return fn(err);
    }

    var result = res.TruliaWebServices.response;

    fn(null, result);
  });
};

module.exports = request;
