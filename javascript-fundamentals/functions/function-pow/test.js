// @ts-nocheck
"use strict";

describe("pow", function () {
    it("for negative n the result is NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("for floating point n the result is NaN", function () {
        assert.isNaN(pow(2, 2.1));
    });

});