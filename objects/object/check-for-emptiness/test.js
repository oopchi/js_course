// @ts-nocheck
"use strict";

describe("isEmpty", () => {
    it("if object has properties, return true", () => {
        let obj = {
            t: undefined,
        };
        assert.isTrue(isEmpty(obj));
    });

    it("if object has no properties, return false", () => {
        let obj = {};
        assert.isFalse(isEmpty(obj));
    });

    it("if object has symbolic properties, return false", () => {
        let obj = {
            [Symbol("id")]: "id",
        };
        assert.isFalse(isEmpty(obj));
    })
});