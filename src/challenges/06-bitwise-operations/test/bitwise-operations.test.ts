import {
  bitwiseAND,
  bitwiseOR,
  bitwiseXOR,
  Input,
  Output,
} from "../bitwise-operations";

type Cases = [Input, Input, Output][];

describe("Bitwise Operations", () => {
  describe("Bitwise AND", () => {
    const cases: Cases = [
      [7, 12, 4],
      [32, 17, 0],
      [13, 19, 1],
    ];

    test.each(cases)(
      "for %d and %d output should be %d",
      (firstArg, secondArg, expectedResult) => {
        const result = bitwiseAND(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
      }
    );
  });

  describe("Bitwise OR", () => {
    const cases: Cases = [
      [7, 12, 15],
      [32, 17, 49],
      [13, 19, 31],
    ];

    test.each(cases)(
      "for %d and %d output should be %d",
      (firstArg, secondArg, expectedResult) => {
        const result = bitwiseOR(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
      }
    );
  });

  describe("Bitwise XOR", () => {
    const cases: Cases = [
      [7, 12, 11],
      [32, 17, 49],
      [13, 19, 30],
    ];

    test.each(cases)(
      "for %d and %d output should be %d",
      (firstArg, secondArg, expectedResult) => {
        const result = bitwiseXOR(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
      }
    );
  });
});
