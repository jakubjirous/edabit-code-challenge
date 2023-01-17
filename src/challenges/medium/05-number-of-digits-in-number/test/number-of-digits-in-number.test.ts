import {
  Input,
  Output,
  numberOfDigitsInNumber,
} from "../number-of-digits-in-number";

type Cases = [Input, Output][];

describe("Number Of Digits In Number", () => {
  const cases: Cases = [
    [13124, 5],
    [0, 1],
    [-12381428, 8],
    [12, 2],
    [42, 2],
    [1000, 4],
    [136, 3],
    [1000000000, 10],
    [2147483647, 10],
    [-2147483647, 10],
  ];

  test.each(cases)(
    "for number = %d output should be %d",
    (firstArg, expectedResult) => {
      const result = numberOfDigitsInNumber(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
