// @ts-nocheck
"use strict";

describe("min", function () {
    it("for undefined arguments, returns NaN", function () {
        assert.isNaN(min(undefined));
    });

    it("for arguments: 1, 2, 3, 4, returns 1", function () {
        assert.strictEqual(min(1, 2, 3, 4), 1);
    });

    it("for arguments: 3, 4, 2, 1, 2, -1, -3, 4, 10 returns -3", function () {
        assert.strictEqual(min(3, 4, 2, 1, 2, -1, -3, 4, 10), -3);
    });

    it("for arguments: null, null, 3, 4, returns NaN", function () {
        assert.isNaN(min(null, null, 3, 4));
    });

    it("for arguments: undefined, undefined, 3, 4, returns NaN", function () {
        assert.isNaN(min(undefined, undefined, 3, 4));
    });
});