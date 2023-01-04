export type Base = number;
export type Height = number;
export type Output = number;

/**
 * A function that takes the base and height of a triangle and `return` its area.
 *
 * @param base
 * @param height
 */
export const triangleArea = (base: Base, height: Height): Output => {
  return (base * height) / 2;
};
