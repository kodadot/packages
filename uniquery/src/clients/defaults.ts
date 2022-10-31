import { ObjProp, Fields, QueryOptions } from '../types'

export const defaultField = ['id', 'metadata', 'currentOwner', 'issuer']
export function getFields<T>(fields?: ObjProp<T>): Fields<T> {
  return fields ?? defaultField
}

export function wrapSubqueryList<T>(fields: Fields<T>): [{ nodes: Fields<T> }] {
  return [{ nodes: fields }]
}

export function optionToQuery(
  options: QueryOptions,
  replaceLimitWithFirst = false
): string {
  const limit = replaceLimitWithFirst ? 'first' : 'limit'
  let query = ''
  if (options.limit) {
    query += `${limit}: ${options.limit}`
  }
  if (options.offset) {
    query += `, offset: ${options.offset}`
  }
  if (options.orderBy) {
    query += `, orderBy: "${options.orderBy}"`
  }
  return query
}
