'use strict';

const packageA = require("package-a");

module.exports = packageB;

function packageB() {
    return ["package-b", ...packageA()];
}
