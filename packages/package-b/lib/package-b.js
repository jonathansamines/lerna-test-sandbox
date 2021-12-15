'use strict';

const packageA = require('package-a');

function packageB() {
  return ['package-b', ...packageA()];
}

module.exports = packageB;
