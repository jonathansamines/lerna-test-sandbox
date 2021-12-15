'use strict';

const packageB = require("package-b");

module.exports = packageC;

function packageC() {
    return ["package-c", ...packageB()];
}
