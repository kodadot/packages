import { Key, Variable } from './types'

export function asVar<T>(value: Key<T>): Variable<T> {
  return { var: value }
}
