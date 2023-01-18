import { Input, Output, towerOfHanoi } from "../tower-of-hanoi";

type Cases = [Input, Output][];

describe("Tower Of Hanoi", () => {
  const cases: Cases = [
    [3, 7],
    [5, 31],
    [8, 255],
    [19, 524287],
    [9, 511],
    [13, 8191],
    [0, 0],
  ];

  test.each(cases)(
    "for discs = %d output should be %d",
    (firstArg, expectedResult) => {
      const result = towerOfHanoi(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
