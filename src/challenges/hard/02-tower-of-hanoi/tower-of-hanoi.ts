export type Input = number;
export type Output = number;

/**
 * A function that takes a number of discs as an argument and returns the minimum amount of steps needed to complete the game.
 *
 * @param discs
 */
export const towerOfHanoi = (discs: Input): Output => {
  return Math.pow(2, discs) - 1;
};
