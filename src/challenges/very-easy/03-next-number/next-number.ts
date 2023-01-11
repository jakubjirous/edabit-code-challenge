export type Input = number;
export type Output = number;

/**
 * A function that takes a number as an argument, increments the number by +1 and returns the result.
 *
 * @param input
 */
export const nextNumber = (input: Input): Output => {
  return input + 1;
};
