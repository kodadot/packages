import { RulesLogic } from 'json-logic-js'

export function gt<T extends RulesLogic>(a: T, b: T): RulesLogic {
  return { '>': [a, b] }
}

export function gte<T extends RulesLogic>(a: T, b: T): RulesLogic {
  return { '>=': [a, b] }
}

export function lt<T extends RulesLogic>(a: T, b: T): RulesLogic {
  return { '<': [a, b] }
}

export function lte<T extends RulesLogic>(a: T, b: T): RulesLogic {
  return { '<=': [a, b] }
}
