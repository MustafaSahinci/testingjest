const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 22 + 20", () => {
            expect(addition(20, 22)).toBe(42)
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73)
        })
    });
    describe("subtraction function", () => {

    });
    describe("multiply function", () => {

    });
    describe("division function", () => {

    });
})