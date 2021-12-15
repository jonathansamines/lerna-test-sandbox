'use strict';

const assert = require("assert");
const packageA = require('../lib/package-a');

describe('package-a', () => {
    it('needs tests', () => {
        assert.deepEqual(packageA(), ["package-a"]);
    });
});
