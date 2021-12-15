'use strict';

const packageB = require('package-b');

function packageC() {
  return ['package-c', ...packageB()];
}

module.exports = packageC;
