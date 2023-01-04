import { Input, nextNumber, Output } from "../next-number";

type Cases = [Input, Output][];

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
