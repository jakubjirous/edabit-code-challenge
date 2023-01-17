import { Input, Output, sevenBoom } from "../seven-boom";

type Cases = [Input, Output][];

describe("Seven Boom", () => {
  const cases: Cases = [
    [[1, 2, 3, 4, 5, 6, 7], "Boom!"],
    [[8, 6, 33, 100], "There is no 7 in the array"],
    [[2, 55, 60, 97, 86], "Boom!"],
    [[2, 6, 7, 9, 3], "Boom!"],
    [[33, 68, 400, 5], "There is no 7 in the array"],
    [[86, 48, 100, 66], "There is no 7 in the array"],
    [[76, 55, 44, 32], "Boom!"],
    [[35, 4, 9, 37], "Boom!"],
  ];

  test.each(cases)(
    "for input %j output should be '%s'",
    (firstArg, expectedResult) => {
      const result = sevenBoom(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
