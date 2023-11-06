export function isBaseSixtyFour(data: string): boolean {
  // eslint-disable-next-line no-useless-escape
  return /^data:([a-z]+)\/([\.\-\+a-z]+);base64,/.test(data)
}

function isBaseSixtyFourJSON(data: string): boolean {
  return /^data:application\/json;base64,/.test(data)
}

export function canBeJSON(data: string): boolean {
  return (data.startsWith('{') && data.endsWith('}')) ||
    (data.startsWith('[') && data.endsWith(']'))
}

export function fromBaseSixtyFour(data: string): string {
  if (isBaseSixtyFour(data)) {
    return atob(data.split(',').at(1))
  }

  return ''
}

export function baseSixtyFourReviver(_key: string, value: unknown) {
  if (typeof value === 'string' && isBaseSixtyFour(value)) {
    return fromBaseSixtyFour(value)
  }

  return value
}

export function baseSixtyFourFormatter<T>(data: string): T {
  if (isBaseSixtyFourJSON(data)) {
    return JSON.parse(fromBaseSixtyFour(data)) as T
  }

  return fromBaseSixtyFour(data) as unknown as T
}
