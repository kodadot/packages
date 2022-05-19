import { applyResult, evaluate } from './eval'
import { intoLogic } from './merge'
import { IfThat } from './types'

export function build<T>(rules: IfThat<T>[], entity: T) {
  let result = { ...entity }
  for (const rule of rules) {
    const logic = evaluate(intoLogic(rule), result)
    const [, key, value] = rule
    result = applyResult(logic, key, value, entity)
  }

  return result
}
