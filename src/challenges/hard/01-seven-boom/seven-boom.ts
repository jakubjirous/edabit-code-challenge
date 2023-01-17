export type Input = number[];
export type Output = "Boom!" | "There is no 7 in the array";

/**
 * A function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "There is no 7 in the array".
 *
 * @param array
 */
export const sevenBoom = (array: Input): Output => {
  return String(array).includes("7") ? "Boom!" : "There is no 7 in the array";
};
