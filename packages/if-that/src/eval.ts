import { apply, RulesLogic } from 'json-logic-js'
import { Key } from './types'
import { isNestedKey } from './variable'

export function evaluate<T>(condition: RulesLogic, entity: T): boolean {
  return apply(condition, entity)
}

export function applyResult<T>(result: boolean, key: Key<T>, value: any, entity: T): T {
  if (!result) {
    return entity
  }

  if (isNestedKey(key)) {
    return applyAsNested(key, value, entity)
  }

  return { ...entity, [key]: value }
}

function applyAsNested<T>(key: Key<T>, value: any, entity: T): T {
  const [parent, child] = String(key).split('.')
  const parentValue = entity[parent]
  return {
    ...entity,
    [parent]: {
      ...parentValue,
      [child]: value
    }
  }
}
