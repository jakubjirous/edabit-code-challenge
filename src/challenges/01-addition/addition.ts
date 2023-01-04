/**
 * Return the Sum of Two Numbers
 *
 * Create a function that takes two numbers as arguments and returns their sum.
 *
 * Example:
 * - addition(3, 2) ➞ 5
 * - addition(-3, -6) ➞ -9
 * - addition(7, 3) ➞ 10
 */

export type Param1 = number;
export type Param2 = number;
export type Output = number;

export const addition = (param1: Param1, param2: Param2): Output => {
  return param1 + param2;
};
