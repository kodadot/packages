import { RulesLogic } from 'json-logic-js'

export type Key<T> = keyof T

export type IfThat<T> = [RulesLogic[], Key<T>, any]

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
