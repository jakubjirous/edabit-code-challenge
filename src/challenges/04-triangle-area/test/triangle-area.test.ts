import { Base, Height, Output, triangleArea } from "../triangle-area";

type Cases = [Base, Height, Output][];

describe("Triangle Area", () => {
  const cases: Cases = [
    [3, 2, 3],
    [5, 4, 10],
    [7, 4, 14],
    [10, 10, 50],
    [0, 60, 0],
    [12, 11, 66],
  ];

  test.each(cases)(
    "for base %p and height %p output should be %p",
    (firstArg, secondArg, expectedResult) => {
      const result = triangleArea(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
