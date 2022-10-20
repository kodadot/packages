import { RulesLogic } from 'json-logic-js'

export function eq<T>(a: T, b: T): RulesLogic {
  return { '===': [a, b] }
}

export function notEq<T>(a: T, b: T): RulesLogic {
  return { '!==': [a, b] }
}

export function not<T>(a: T): RulesLogic {
  return { '!': a }
}
