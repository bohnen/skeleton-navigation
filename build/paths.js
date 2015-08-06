var path = require('path');

var appRoot  = 'src/';
var testRoot = 'test/';
var outRoot  = 'dist/'; 

module.exports = {
  root:   appRoot,
  source: appRoot + '**/*.ts',
  html:   appRoot + '**/*.html',
  dtsSource: 'jspm_packages/**/*.ts',
  style: 'styles/**/*.css',
  doc:'./doc',
  output: outRoot,
  sourceMapRelativePath: '/' + appRoot,

  unitSpecsSrc:  testRoot + 'unit/**/*.ts',
  unitSpecsDist: outRoot  + '',

  e2eSpecsSrc:   testRoot + 'e2e/**/*.ts',
  e2eSpecsDist:  outRoot  + 'e2e/dist/'
};
