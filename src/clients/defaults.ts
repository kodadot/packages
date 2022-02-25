import { ObjProp } from '../types'

export const defaultField = ['id', 'metadata', 'currentOwner', 'issuer']
export function getFields<T> (fields?: ObjProp<T>): ObjProp<T> | string[] {
  return fields ?? defaultField
}
