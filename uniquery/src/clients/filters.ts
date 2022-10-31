import { snakeCase } from 'scule'

import {
  FilterBuilder,
  FilterOrderDirection,
  FilterType,
  Provider,
  FilterOrderType,
  FilterMappingFn
} from '../types'
import { isSubQuery } from './factory'

export function getFilters(filters: FilterBuilder[], provider: Provider) {
  const mappingFn = isSubQuery(provider)
    ? subqueryFilterMapping
    : subsquidFilterMapping
  return generateFilters(filters, mappingFn)
}

function generateFilters(
  filters: FilterBuilder[],
  mappingFn: FilterMappingFn
): string[] {
  return filters
    .map(([type, directions]) =>
      getFilterOrders(directions).map(direction => mappingFn(type, direction))
    )
    .flat()
}

function subqueryFilterMapping(
  filter: FilterType,
  direction: FilterOrderDirection
): string {
  const value = snakeCase(filter).toUpperCase()
  return appendFilterDirection(value, direction)
}

function subsquidFilterMapping(
  filter: FilterType,
  direction: FilterOrderDirection
): string {
  return appendFilterDirection(filter, direction)
}

function appendFilterDirection(
  filter: string,
  direction: FilterOrderDirection
) {
  return filter + '_' + direction
}

function getFilterOrders(
  filterOrders: FilterOrderType
): FilterOrderDirection[] {
  if (!filterOrders) {
    return ['ASC', 'DESC']
  }

  return filterOrders.filter(Boolean)
}
