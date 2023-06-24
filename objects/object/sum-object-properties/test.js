// @ts-nocheck
"use strict";

describe("sumAllProps", () => {
    it("if null is passed, return 0", () => {
        assert.strictEqual(sumAllProps(null), 0);
    });

    it("if undefined is passed, return 0", () => {
        assert.strictEqual(sumAllProps(undefined), 0);
    });

    it("if non-object is passed, return 0", () => {
        assert.strictEqual(sumAllProps(1), 0);
    });

    it("if object has no props, return 0", () => {
        let obj = {};

        assert.strictEqual(sumAllProps(obj), 0);
    });

    it("if object has no {number} props, return 0", () => {
        let obj = {
            a: "hehe",
            b: "hoh",
        };

        assert.strictEqual(sumAllProps(obj), 0);
    });

    it("if object contains only {number} props, return sum of all props", () => {
        let obj = {
            a: 1,
            b: 2,
            c: 3,
        };

        assert.strictEqual(sumAllProps(obj), 1 + 2 + 3);
    });

    it("if object contains mixed of {number} and non-{number} props, return sum of only {number} props", () => {
        let obj = {
            a: 1,
            aa: "hah",
            b: 2,
            bb: "hoho",
            c: 3,
        };

        assert.strictEqual(sumAllProps(obj), 1 + 2 + 3);
    });

    it("if object contains mixed of {number} and {string} that resembles number, return sum of only {number} props", () => {
        let obj = {
            a: 1,
            aa: "1",
            b: 2,
            bb: "2",
            c: 3,
            cc: "3",
        };

        assert.strictEqual(sumAllProps(obj), 1 + 2 + 3);
    });

    it("if object contains mixed of {number} and {string} that resembles numbers, and non-{number} that's not string, return sum of only {number} props", () => {
        let obj = {
            a: 1,
            aa: "1",
            b: 2,
            bb: "2",
            ha: "hohjo",
            c: 3,
            cd: "haha",
            cc: "3",
        };

        assert.strictEqual(sumAllProps(obj), 1 + 2 + 3);
    });
}); 