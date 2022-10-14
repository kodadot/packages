import { Key, Variable } from './types'

export function asVar<T>(value: Key<T>): Variable<T> {
  return { var: value }
}

export function isNestedKey<T>(value: Key<T>): boolean {
  return String(value).includes('.')
}
