import { ItemWithKind, ItemKind } from './types'

export function isType(item: ItemWithKind, kind: ItemKind): boolean {
  return item.kind === kind
}

export function isEvent(item: ItemWithKind): boolean {
  return isType(item, 'event')
}

export function isCall(item: ItemWithKind): boolean {
  return isType(item, 'call')
}

export function isTranasction(item: ItemWithKind): boolean {
  return isType(item, 'transaction')
}

export function isEvm(item: ItemWithKind): boolean {
  return isType(item, 'evmLog')
}

export function isNotEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}
