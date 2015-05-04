'use strict';

var TruliaError = require('./trulia_error');
var request = require('./request');
var qs = require('querystring');
var _ = require('lodash');

var TRULIA_API_URL = 'http://api.trulia.com/webservices.php';
var LOCATION_INFO_DEFAULT = {
  library: 'LocationInfo'
};
// var TRULIA_STATS_DEFAULT = {
//   library: 'TruliaStats'
// };

var Trulia = function (apiKey) {
  if (!_.isString(apiKey)) {
    throw new TruliaError('Must pass an API key');
  }

  this.apiKey = apiKey;
};

Trulia.prototype.request = request;

Trulia.prototype.get = function (querystring, cb) {
  var url = [TRULIA_API_URL, '?', querystring].join('');

  return this.request.get.call(this.request, url, cb);
};

Trulia.prototype.getNeighborhoodsInCity = function (opts, cb) {
  opts = _.defaults(opts || {}, LOCATION_INFO_DEFAULT, {
    function: 'getNeighborhoodsInCity',
    state: 'CA',
    city: 'San Francisco'
  });

  var querystring = qs.stringify(opts);

  return this.get(querystring, cb).promise();
};

module.exports = Trulia;
