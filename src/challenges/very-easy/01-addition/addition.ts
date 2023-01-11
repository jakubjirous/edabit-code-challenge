export type Param1 = number;
export type Param2 = number;
export type Output = number;

/**
 * A function that takes two numbers as arguments and returns their sum.
 *
 * @param param1
 * @param param2
 */
export const addition = (param1: Param1, param2: Param2): Output => {
  return param1 + param2;
};
