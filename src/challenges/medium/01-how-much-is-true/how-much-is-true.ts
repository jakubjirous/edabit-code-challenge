export type Input = boolean[];
export type Output = number;

/**
 * A function which returns the number of true values there are in an array.
 *
 * @param inputArray
 */
export const howMuchIsTrue = (inputArray: Input): Output => {
  return inputArray.reduce<Output>((acc, value) => {
    return value ? acc + 1 : acc;
  }, 0);
};
