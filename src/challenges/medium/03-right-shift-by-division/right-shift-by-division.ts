export type Input = number;
export type Output = number;

/**
 * The right shift operation is similar to floor division by powers of two.
 *
 * @param x
 * @param y
 */
export const rightShiftByDivision = (x: Input, y: Input): Output => {
  return Math.floor(x / Math.pow(2, y));
};
