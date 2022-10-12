import { wrapToString, wrapURI } from '../../utils'
import { createCollection as createCollectionAsV1 } from '../create'
import { makeSymbol } from '../identification'
import { CreatedCollection } from '../types'
import {
  CreatedBase, CreatedNFT, CreateInteractionFunc
} from './types'
import { InteractionV2 } from './constants'
import { checkBase } from './consolidator'
import { makeBaseSymbol, toSerialNumber } from './identification'

export const createInteraction: CreateInteractionFunc = ({ action, payload }) => {
  const convert = (props: string[]) => {
    return `RMRK::${action}::2.0.0::${props.filter(field => ![undefined, ''].includes(field)).join('::')}`
  }

  switch (action) {
    case InteractionV2.ACCEPT:
      return convert([payload.id, payload.entity_type, payload.entity_id])
    case InteractionV2.BASE:
      return convert([wrapToString(payload.value)])
    case InteractionV2.BUY:
      return convert([payload.id, payload.recipient ?? ''])
    case InteractionV2.CHANGEISSUER:
      return convert([payload.id, payload.newissuer])
    case InteractionV2.BURN:
      return convert([payload.id])
    case InteractionV2.CREATE:
      return convert([wrapToString(payload.value)])
    case InteractionV2.EMOTE:
      return convert([payload.namespace, payload.id, payload.emotion])
    case InteractionV2.EQUIP:
      return convert([payload.id, payload.baseslot])
    case InteractionV2.EQUIPPABLE:
      return convert([payload.id, payload.slot, payload.value])
    case InteractionV2.LIST:
      return convert([payload.id, payload.price])
    case InteractionV2.LOCK:
      return convert([payload.id])
    case InteractionV2.MINT:
      return convert([wrapToString(payload.value), payload.recipient ?? ''])
    case InteractionV2.RESADD:
      return convert([payload.id, wrapToString(payload.value), payload.replace])
    case InteractionV2.SEND:
      return convert([payload.id, payload.recipient])
    case InteractionV2.SETPROPERTY:
      return convert([payload.id, wrapURI(payload.name), wrapURI(payload.value)])
    case InteractionV2.SETPRIORITY:
      // value should always be ',' separated
      return convert([payload.id, payload.value])
    case InteractionV2.THEMEADD:
      return convert([payload.base_id, payload.name, wrapToString(payload.value)])
    default:
      throw new Error(`Unsupported action: ${action}`)
  }
}

// DEV: not sure if trasferable should be
export const createNFT = (index: number, collectionId: string, name: string | undefined, metadata: string, transferable: number = 1): CreatedNFT => {
  // checkProps(props)
  // const { symbol, index, transferable = 1, collectionId, metadata } = props
  const sn = toSerialNumber(index)
  const instance = makeSymbol(name)
  return {
    name, // KodaFlavour, not required by RMRK v2
    sn,
    transferable,
    collection: collectionId,
    metadata,
    symbol: instance
  }
}

export const createCollection = (caller: string, symbol: string, name: string | undefined, metadata: string, max = 0): CreatedCollection => {
  // checkProps(props)
  // const { issuer, symbol, max, metadata } = props || {}

  if (max < 0) {
    throw new Error('max should be equal or greater than zero')
  }

  return createCollectionAsV1(caller, symbol, name || '', metadata, max)
}

export const createBase = (props: CreatedBase): CreatedBase => {
  const { symbol: providedSymbol, parts = [], themes } = props
  const symbol = makeBaseSymbol(providedSymbol)
  checkBase({ symbol, parts, themes })
  return {
    ...props,
    symbol
  }
}
