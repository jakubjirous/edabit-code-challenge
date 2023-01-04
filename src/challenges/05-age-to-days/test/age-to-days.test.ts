import { Input, Output, ageToDays } from "../age-to-days";

type Cases = [Input, Output][];

describe("Age to Days", () => {
  const cases: Cases = [
    [10, 3650],
    [0, 0],
    [73, 26645],
    [20, 7300],
    [65, 23725],
    [18, 6570],
    [99, 36135],
    [1, 365],
  ];

  test.each(cases)(
    "for age %d output should be %d days",
    (firstArg, expectedResult) => {
      const result = ageToDays(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
