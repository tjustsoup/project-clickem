export function ObjectEntriesTyped<T extends object>(
  obj: T
): Array<[Extract<keyof T, string>, T[Extract<keyof T, string>]]> {
  return Object.entries(obj) as Array<
    [Extract<keyof T, string>, T[Extract<keyof T, string>]]
  >;
}

/**
 * Gets a random integer from 1 to the `max` provided.
 * 
 * @param max The highest number acquirable
 * @param min Optional - Minimum number that will be return (default 0)
 * @returns `number`
 */
export function getRandomInt(max: number, min?: number): number {
  return Math.floor(Math.random() * (max + 1)) + (min ?? 0);
}