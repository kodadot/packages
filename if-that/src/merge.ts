import { RulesLogic } from 'json-logic-js'
import { IfThat } from './types'

export function intoLogic<T>([rule]: IfThat<T>): RulesLogic {
  if (Array.isArray(rule)) {
    return merge(rule)
  }

  return rule
}

function merge(rules: RulesLogic[]): RulesLogic {
  return {
    and: [...rules]
  }
}
