export function isEmpty(obj: Record<string, any>) {
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

export function checkProps(props: Record<string, any>): Error | void {
  if (props === undefined || props === null) {
    throw new Error("Props is undefined or null");
  }
  Object.keys(props).forEach(key => {
    if (props[key] === undefined || props[key] === null) {
      throw new Error(`Property ${key} should not be undefined or null`);
    }
  })
}