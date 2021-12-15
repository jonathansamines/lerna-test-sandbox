'use strict';

const assert = require('assert');
const packageC = require('../lib/package-c');

describe('package-c', () => {
  it('needs tests', () => {
    assert.deepEqual(packageC(), ['package-c', 'package-b', 'package-a']);
  });
});
