/**
 * Return the Next Number from the Integer Passed
 *
 * Create a function that takes a number as an argument, increments the number by +1 and returns the result.
 *
 * Example:
 * - nextNumber(0) ➞ 1
 * - nextNumber(9) ➞ 10
 * - nextNumber(-3) ➞ -2
 */

export type Input = number;
export type Output = number;

export const nextNumber = (input: Input): Output => {
  return input + 1;
};
