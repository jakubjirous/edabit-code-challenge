import { convert, Input, Output } from "../convert";

type Cases = [Input, Output][];

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
