import { RulesLogic } from 'json-logic-js'

export function toVar(name: string): RulesLogic {
  return { var: name }
}
