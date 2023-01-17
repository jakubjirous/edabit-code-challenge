import {
  Input,
  Output,
  rightShiftByDivision,
} from "../right-shift-by-division";

type Cases = [Input, Input, Output][];

describe("Right Shift By Division", () => {
  const cases: Cases = [
    [80, 3, 10],
    [-24, 2, -6],
    [-5, 1, -3],
    [38, 0, 38],
    [4666, 6, 72],
    [3777, 6, 59],
    [-512, 10, -1],
    [192, 4, 12],
    [1024, 5, 32],
  ];

  test.each(cases)(
    "for x = %d and y = %d output should be %d",
    (firstArg, secondArg, expectedResult) => {
      const result = rightShiftByDivision(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
