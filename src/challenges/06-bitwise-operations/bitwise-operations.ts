export type Input = number;
export type Output = number;

/**
 * A function to calculate the bitwise AND of two numbers.
 *
 * @param param1
 * @param param2
 */
export const bitwiseAND = (param1: Input, param2: Input): Output =>
  param1 & param2;

/**
 * A function to calculate the bitwise OR of two numbers.
 *
 * @param param1
 * @param param2
 */
export const bitwiseOR = (param1: Input, param2: Input): Output =>
  param1 | param2;

/**
 * A function to calculate the bitwise XOR of two numbers.
 *
 * @param param1
 * @param param2
 */
export const bitwiseXOR = (param1: Input, param2: Input): Output =>
  param1 ^ param2;
