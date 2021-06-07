const dictionary = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export const convertStringToNumber = (string) => {
  return dictionary.indexOf(string.toLowerCase());
};
export const convertNumberToString = (number) => {
  return dictionary[number];
};
export const sum = (a, b) => {
  const result = convertStringToNumber(a) + convertStringToNumber(b);
  return convertNumberToString(result);
};
