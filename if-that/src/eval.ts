import { apply, RulesLogic } from 'json-logic-js'
import { Key } from './types'

export function evaluate<T>(condition: RulesLogic, entity: T): boolean {
  return apply(condition, entity)
}

export function applyResult<T>(result: boolean, key: Key<T>, value: any, entity: T): T {
  if (!result) {
    return entity
  }

  return { ...entity, [key]: value }
}
