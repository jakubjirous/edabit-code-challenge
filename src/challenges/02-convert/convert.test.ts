import { convert } from "./convert";

type FirstArg = number;
type ExpectedResult = number;
type Cases = [FirstArg, ExpectedResult][];

/**
 * Tests a function that takes an integer minutes and converts it to seconds.
 */
describe("Convert", () => {
  const cases: Cases = [
    [6, 360],
    [4, 240],
    [8, 480],
    [60, 3600],
  ];

  test.each(cases)(
    "for convert %p min output should be %p sec",
    (firstArg, expectedResult) => {
      const result = convert(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
