export type Input = number[];
export type Output = number;

/**
 * A function that returns the total number of boomerangs in an array.
 *
 * @param inputArray
 */
export const numberOfBoomerangs = (inputArray: Input): Output => {
  return inputArray.reduce((acc, value, index, array) => {
    return value !== array[index + 1] && value === array[index + 2]
      ? acc + 1
      : acc;
  }, 0);
};
