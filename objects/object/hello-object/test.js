// @ts-nocheck
"use strict";

describe("{object} user", () => {
    it("user is an object", function () {
        assert.isObject(user);
    });

    it("user has no property name", function () {
        assert.strictEqual(Object.keys(user).findIndex((value) => value == "name"), -1);
    });

    it("user has property surname", function () {
        assert.notStrictEqual(Object.keys(user).findIndex((value) => value == "surname"), -1);
    });

    it("user's surname is Smith", function () {
        assert.equal(user.surname, "Smith");
    });
});