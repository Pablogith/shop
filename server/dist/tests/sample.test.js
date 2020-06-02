"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var chai_1 = require("chai");
describe('Sample Test', function () {
    it('should test that true === true', function () {
        chai_1.expect(true).to.equal(true);
    });
    it('should test that 1+1==2', function () {
        chai_1.expect(1 + 1).to.equal(2);
    });
});
