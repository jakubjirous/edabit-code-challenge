/**
 * Area of a Triangle
 *
 * Write a function that takes the base and height of a triangle and return its area.
 *
 * Example:
 * - triangleArea(3, 2) ➞ 3
 * - triangleArea(7, 4) ➞ 14
 * - triangleArea(10, 10) ➞ 50
 */

export type Base = number;
export type Height = number;
export type Output = number;

export const triangleArea = (base: Base, height: Height): Output => {
  return (base * height) / 2;
};
