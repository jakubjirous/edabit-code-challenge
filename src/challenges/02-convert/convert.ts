export type Input = number;
export type Output = number;

/**
 * A function that takes an integer minutes and converts it to seconds.
 *
 * @param minutes
 */
export const convert = (minutes: Input): Output => {
  return minutes * 60;
};
