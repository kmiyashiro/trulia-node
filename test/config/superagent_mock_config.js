'use strict';

var TRULIA_API_URL = 'http://api.trulia.com/webservices.php';
var fixtures = require('../fixture');

module.exports = [
  {
    // regular expression of URL
    pattern: TRULIA_API_URL + '\\?library=LocationInfo&function=(\\w+)?&',

    // callback that returns the data
    fixtures: function (match) {
      var name = match[1];

      return fixtures[name];
    },

    // `match`: result of the resolution of the regular expression
    // `data`: data returns by `fixtures` attribute
    callback: function (match, data) {
      return {
        data: data
      };
    }
  },
];
