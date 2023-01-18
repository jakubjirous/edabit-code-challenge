import { Input, Output, numberOfBoomerangs } from "../number-of-boomerangs";

type Cases = [Input, Output][];

describe("Number Of Boomerangs", () => {
  const cases: Cases = [
    [[9, 5, 9, 5, 1, 1, 1], 2],
    [[5, 6, 6, 7, 6, 3, 9], 1],
    [[4, 4, 4, 9, 9, 9, 9], 0],
    [[5, 9, 5, 9, 5], 3],
    [[4, 4, 4, 8, 4, 8, 4], 3],
    [[2, 2, 2, 2, 2, 2, 3], 0],
    [[2, 2, 2, 2, 3, 2, 3], 2],
    [[1, 2, 1, 1, 1, 2, 1], 2],
    [[5, 1, 1, 1, 1, 4, 1], 1],
    [[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2], 3],
    [[1, 7, 1, 7, 1, 7, 1], 5],
    [[5, 5, 5], 0],
  ];

  test.each(cases)(
    "for inputArray = %j output should be %d",
    (firstArg, expectedResult) => {
      const result = numberOfBoomerangs(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
