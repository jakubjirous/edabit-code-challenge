import { Input, Output, derivative } from "../derivative";

type Cases = [Input, Input, Output][];

describe("Derivative of a Function", () => {
  const cases: Cases = [
    [1, 4, 1],
    [3, -2, 12],
    [4, -3, -108],
    [9, -5, 3515625],
    [1254, 0, 0],
    [-2, 10, -0.002],
  ];

  test.each(cases)(
    "for b = %d and m = %d output should be %d",
    (firstArg, secondArg, expectedResult) => {
      const result = derivative(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
