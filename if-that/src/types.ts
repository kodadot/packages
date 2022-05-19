import { RulesLogic } from 'json-logic-js'

export type Key<T> = keyof T
export type OneOrMore<T> = T | T[]

export type IfThat<T> = [OneOrMore<RulesLogic>, Key<T>, any]

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
