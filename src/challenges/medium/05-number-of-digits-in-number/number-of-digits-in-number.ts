export type Input = number;
export type Output = number;

/**
 * A function that will return an integer number corresponding to the amount of digits in the given integer number.
 *
 * @param number
 */
export const numberOfDigitsInNumber = (number: Input): Output => {
  // alternative solution with using string
  // return String(Math.abs(number)).length;

  return number ? Math.floor(Math.log10(Math.abs(number))) + 1 : 1;
};
