import { addition, Output, Param1, Param2 } from "../addition";

type Cases = [Param1, Param2, Output][];

/**
 * Tests a function that takes two numbers as arguments and returns their sum.
 */
describe("Addition", () => {
  const cases: Cases = [
    [2, 3, 5],
    [-3, -6, -9],
    [7, 3, 10],
    [88, 2, 90],
  ];

  test.each(cases)(
    "for addition %p + %p output should be %p",
    (firstArg, secondArg, expectedResult) => {
      const result = addition(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
