import { RulesLogic } from 'json-logic-js'

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

export type DotNestedKeys<T> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
    : '') extends infer D ? Extract<D, string> : never;

export type Key<T> = keyof T
export type OneOrMore<T> = T | T[]

export type IfThat<T> = [OneOrMore<RulesLogic>, DotNestedKeys<T>, any]
export type Variable<T> = { var: Key<T> }

export type Operators =
  | '=='
  | '==='
  | '!='
  | '!=='
  | '!'
  | '!!'
  | '>'
  | '>='
  | '<'
  | '<='
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
