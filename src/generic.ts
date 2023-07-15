export function isNullish<T>(
  value: T
): value is T extends null | undefined ? T : never {
  return value === null || value === undefined;
}

export function isNotNullish<T>(
  value: T
): value is T extends null | undefined ? never : T {
  return value !== null && value !== undefined;
}
