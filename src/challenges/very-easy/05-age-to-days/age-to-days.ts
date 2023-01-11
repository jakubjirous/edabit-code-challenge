export type Input = number;
export type Output = number;

/**
 * A function that takes the age in years and returns the age in days.
 *
 * @param age
 */
export const ageToDays = (age: Input): Output => {
  return age * 365;
};
