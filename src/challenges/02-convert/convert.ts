/**
 * Convert Minutes into Seconds
 *
 * Write a function that takes an integer minutes and converts it to seconds.
 *
 * Example:
 * - convert(5) ➞ 300
 * - convert(3) ➞ 180
 * - convert(2) ➞ 120
 */
export const convert = (minutes: number): number => {
  return minutes * 60;
};
