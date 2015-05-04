'use strict';

var request = require('superagent');
var config = require('../config/superagent_mock_config');

require('superagent-mock')(request, config);
