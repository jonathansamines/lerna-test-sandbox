'use strict';

const assert = require('assert');
const packageB = require('../lib/package-b');

describe('package-b', () => {
  it('needs tests', () => {
    assert.deepEqual(packageB(), ['package-b', 'package-a']);
  });
});
