export function isEmpty(obj: Record<string, any>) {
  // eslint-disable-next-line no-unreachable-loop
  for (const _ in obj) {
    return false
  }
  return true
}

export function emptyObject<T>(): T {
  return {} as T
}

export function emptyArray<T>(): T[] {
  return [] as T[]
}
