import { nextNumber } from "./next-number";

type FirstArg = number;
type ExpectedResult = number;
type Cases = [FirstArg, ExpectedResult][];

/**
 * Tests a function that takes a number as an argument, increments the number by +1 and returns the result.
 */
describe("Next Number", () => {
  const cases: Cases = [
    [2, 3],
    [-9, -8],
    [0, 1],
    [999, 1000],
    [73, 74],
  ];

  test.each(cases)(
    "for number %p output should be %p",
    (firstArg, expectedResult) => {
      const result = nextNumber(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
