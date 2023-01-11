import { Input, redundantFunction } from "../redundant-function";

type Cases = [Input, Input][];

describe("Redundant Function", () => {
  const cases: Cases = [
    ["apple", "apple"],
    ["pear", "pear"],
    ["", ""],
  ];

  test.each(cases)(
    "for str = '%s' output should be '%s'",
    (firstArg, expectedResult) => {
      const result = redundantFunction(firstArg);
      expect(result()).toEqual(expectedResult);
    }
  );
});
