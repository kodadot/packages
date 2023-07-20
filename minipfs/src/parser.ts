export function isBaseSixtyFour(data: string): boolean {
  return /^data:([a-z]+)\/([.-+a-z]+);base64,/.test(data)
}

export function isJSON(data: string): boolean {
  return data.startsWith('{') && data.endsWith('}')
}

export function fromBaseSixtyFour(data: string): string {
  if (isBaseSixtyFour(data)) {
    return atob(data.split(',').at(1))
  }

  throw new Error('Not a base64 string')
}

export function baseSixtyFourReviver(_key: string, value: unknown) {
  if (typeof value === 'string' && isBaseSixtyFour(value)) {
    return fromBaseSixtyFour(value)
  }

  return value
}
