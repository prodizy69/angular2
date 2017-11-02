var envConfig   = require('./env');
var util        = require('gulp-util');
var _           = require('lodash');

var color;
var colorMap = {
	development	: 'bgGreen',
	production	: 'bgCyan'
};

color = colorMap[envConfig.ENV] || 'bgMagenta';

var Dashboard = {};

Dashboard.show = function() {
	console.log('============== Building Bayboon Module ==============');
  console.log('Current environment: ' + util.colors[color](envConfig.ENV));
  console.log('===========================================');
};

module.exports = Dashboard;
