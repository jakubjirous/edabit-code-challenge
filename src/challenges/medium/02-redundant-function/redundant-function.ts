export type Input = string;
export type Output = () => string;

/**
 * A function redundant that takes in a string str and returns a function that returns str.
 *
 * @param str
 */
export const redundantFunction = (str: Input): Output => {
  return () => str;
};
