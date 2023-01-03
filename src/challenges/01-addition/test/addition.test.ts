import { addition } from "../addition";

type FirstArg = number;
type SecondArg = number;
type ExpectedResult = number;
type Cases = [FirstArg, SecondArg, ExpectedResult][];

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
