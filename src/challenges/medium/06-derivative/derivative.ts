export type Input = number;
export type Output = number;

/**
 * A function that takes numbers b and m as arguments and returns the derivative of the function f(x) = x^b with respect to x evaluated at x = m, where b and m are constants.
 *
 * @param b
 * @param m
 */
export const derivative = (b: Input, m: Input): Output => {
  return b * Math.pow(m, b - 1);
};
