export type Input = "s" | "c";
export type Input2 = number;
export type Output = number;

/**
 * A function that takes a number and returns the perimeter of either a circle or a square.
 *
 * @param shape
 * @param length
 */
export const perimetersWithACatch = (shape: Input, length: Input2): Output => {
  return shape === "s" ? 4 * length : 6.28 * length;
};
