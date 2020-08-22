const politeness = require("./index");

test("politeness of 90 is 5", () => {
  expect(politeness(90)).toBe(5);
});

test("politeness of 15 is 3", () => {
  expect(politeness(15)).toBe(3);
});

test("politeness of 9 is 2", () => {
  expect(politeness(9)).toBe(2);
});

test("politeness of 0 is 0", () => {
  expect(() => politeness(0)).toThrow();
});

test("politeness of -1 causes error", () => {
  expect(() => politeness(-1)).toThrow();
});
