import {
  convertStringToNumber,
  convertNumberToString,
  sum,
} from "./calculator.js";

describe("convertStringToNumber", () => {
  test('Make sure "one" is 1', () => {
    expect(convertStringToNumber("one")).toBe(1);
  });
  test('Make sure "FIVE" is 5', () => {
    expect(convertStringToNumber("FIVE")).toBe(5);
  });
  test('Make sure "Ten" is 10', () => {
    expect(convertStringToNumber("Ten")).toBe(10);
  });
});

describe("convertNumberToString", () => {
  test('Make sure 1 is "one"', () => {
    expect(convertNumberToString(1)).toBe("one");
  });
  test('Make sure 5 is "five"', () => {
    expect(convertNumberToString(5)).toBe("five");
  });
  test('Make sure 10 is "ten"', () => {
    expect(convertNumberToString(10)).toBe("ten");
  });
});

describe("sum", () => {
  test('Make sure sum of "two" and "seven" is "nine"', () => {
    expect(sum("two", "seven")).toBe("nine");
  });
});
