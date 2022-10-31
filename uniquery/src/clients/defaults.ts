import { ObjProp, Fields, QueryOptions } from '../types'

export const defaultField = ['id', 'metadata', 'currentOwner', 'issuer']
export const DEFAULT_LIMIT = 20
export const defaultQueryOptions: QueryOptions = {
  limit: DEFAULT_LIMIT
}

export function getFields<T>(fields?: ObjProp<T>): Fields<T> {
  return fields ?? defaultField
}

export function wrapSubqueryList<T>(fields: Fields<T>): [{ nodes: Fields<T> }] {
  return [{ nodes: fields }]
}

export function optionToQuery(
  options: QueryOptions,
  injectDefault = true
): string {
  const final = injectDefault ? ensureOptions(options) : options
  let query = ''
  if (final.limit) {
    query += `limit: ${options.limit}`
  }
  if (final.offset) {
    query += `, offset: ${options.offset}`
  }
  if (final.orderBy) {
    query += `, orderBy: "${options.orderBy}"`
  }
  return query
}

export function ensureOptions(options?: QueryOptions): QueryOptions {
  const queryOptions = options ?? {}
  return {
    ...defaultQueryOptions,
    ...queryOptions,
    limit: Math.min(queryOptions.limit ?? DEFAULT_LIMIT, defaultQueryOptions.limit)
  }
}
