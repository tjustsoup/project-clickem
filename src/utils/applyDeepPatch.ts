/* applyDeepPatch.ts */
type AnyRecord = Record<string, unknown>;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends AnyRecord ? DeepPartial<T[K]> : T[K];
};

export function isRecord(value: unknown): value is AnyRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Applies a deep patch to `base` and returns a new object.
 * Recursively merges plain objects, replaces other values, and ignores keys not present on `base`.
 * Does not mutate `base`.
 * 
 * @typeParam T - The base object type to patch (must be record-like).
 * @param base - The original object to apply the patch to.
 * @param patch - A partial (typically deep-partial) object containing updates.
 * @returns A new object with the patch applied.
 */
export function applyDeepPatch<T extends AnyRecord>(
  base: T,
  update: DeepPartial<T>
): T {
  let result: T = { ...base }

  for (const k in update) {
    const value = update[k]
    if (value === undefined) continue;

    const current = result[k]

    if (isRecord(current) && isRecord(value)) {
      result[k] = applyDeepPatch(current, value as any) as T[typeof k]
    } else {
      result[k] = value as T[typeof k]
    }
  }

  return result
}