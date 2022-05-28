import { RulesLogic } from 'json-logic-js'

export type Key<T> = keyof T
export type OneOrMore<T> = T | T[]

export type IfThat<T> = [OneOrMore<RulesLogic>, Key<T>, any]
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
