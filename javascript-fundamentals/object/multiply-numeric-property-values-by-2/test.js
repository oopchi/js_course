// @ts-nocheck
"use strict";

describe("mulBy2", () => {
    describe("multiplies all numeric property values of {object} obj by 2", () => {
        let obj;

        beforeEach(() => {
            obj = {
                width: 200,
                height: 300,
            }
        });


        it("obj width equals 2 * 200 = 400", () => {
            mulBy2(obj);

            assert.strictEqual(obj.width, 2 * 200);
        });

        it("obj height equals 2 * 300 = 600", () => {
            mulBy2(obj);

            assert.strictEqual(obj.height, 2 * 300);
        });
    });

    describe("does not multiplies any non-numeric property", () => {
        let obj;

        beforeEach(() => {
            obj = {
                width: "200",
                height: "300",
            }
        });

        it("obj width equals \"200\"", () => {
            mulBy2(obj);

            assert.strictEqual(obj.width, "200");
        });

        it("obj height equals \"300\"", () => {
            mulBy2(obj);

            assert.strictEqual(obj.height, "300");
        });
    });

    describe("does not calculate on empty object", () => {
        let obj = {};

        it("empty object does not have any additional props", () => {
            mulBy2(obj);

            assert.strictEqual(Object.keys(obj).length, 0);
        });
    });

    describe("does not calcaulte on undefined", () => {
        let obj;

        it("undefined should remain undefined", () => {
            mulBy2(obj);

            assert.strictEqual(obj, undefined);
        });
    });
});