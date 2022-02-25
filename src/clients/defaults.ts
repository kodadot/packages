import { ObjProp, Fields } from '../types'

export const defaultField = ['id', 'metadata', 'currentOwner', 'issuer']
export function getFields<T> (fields?: ObjProp<T>): Fields<T> {
  return fields ?? defaultField
}

export function wrapSubqueryList<T> (fields: Fields<T>): [{ nodes: Fields<T> }] {
  return [{ nodes: fields }]
}
