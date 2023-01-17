import {
  Input,
  Input2,
  Output,
  perimetersWithACatch,
} from "../perimeters-with-a-catch";

type Cases = [Input, Input2, Output][];

describe("Perimeters With A Catch", () => {
  const cases: Cases = [
    ["s", 1, 4],
    ["s", 4, 16],
    ["s", 9, 36],
    ["s", 13, 52],
    ["s", 30, 120],
    ["c", 1, 6.28],
    ["c", 4, 25.12],
    ["c", 9, 56.52],
    ["c", 13, 81.64],
    ["c", 30, 188.4],
  ];

  test.each(cases)(
    "for shape = '%s' and length = %d output should be %d",
    (firstArg, secondArg, expectedResult) => {
      const result = perimetersWithACatch(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
