const mapStringsToNumbers = {
  one: 1,
  two: 2,
  five: 5,
  seven: 7,
  nine: 9,
  ten: 10,
};

const mapNumbersToStrings = Object.entries(mapStringsToNumbers).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

export const convertStringToNumber = (string) =>
  parseInt(mapStringsToNumbers[string.toLowerCase()]);

export const convertNumberToString = (number) => mapNumbersToStrings[number];

export const sum = (a, b) =>
  mapNumbersToStrings[mapStringsToNumbers[a] + mapStringsToNumbers[b]];
