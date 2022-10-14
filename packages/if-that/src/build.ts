import { applyResult, evaluate } from './eval'
import { intoLogic } from './merge'
import { IfThat, OneOrMore } from './types'

export function build<T>(rules: IfThat<T>[], entity: T) {
  let result = { ...entity }
  for (const rule of rules) {
    const logic = evaluate(intoLogic(rule), result)
    const [, key, value] = rule
    result = applyResult(logic, key, value, entity)
  }

  return result
}

export function parse<T>(rules: string): IfThat<T>[] {
  const parsed = JSON.parse(rules) as OneOrMore<IfThat<T>>
  if (!Array.isArray(parsed)) {
    throw new ReferenceError('[IFTHAT::build::parse] Rules should be an array')
  }

  if (parsed.length === 3) {
    return [parsed as IfThat<T>]
  }

  return parsed
}
