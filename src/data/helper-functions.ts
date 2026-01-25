export function ObjectEntriesTyped<T extends object>(
  obj: T
): Array<[Extract<keyof T, string>, T[Extract<keyof T, string>]]> {
  return Object.entries(obj) as Array<
    [Extract<keyof T, string>, T[Extract<keyof T, string>]]
  >;
}