import { isEmptyString, wrapToString, wrapURI } from '../../utils'
import { SQUARE } from '../shared/constants'
import { makeSymbol } from '../shared/identification'
import { makeCollection } from '../shared/make'
import { BinaryBoolean, RemarkableString } from '../shared/types'
import { checkBase } from './consolidator'
import { Interaction } from './enums'
import { makeBaseSymbol, toSerialNumber } from './identification'
import { CreatedBase, CreatedCollection, CreatedNFT, CreateInteractionFunc, IRoyaltyAttribute, RoyaltyInfo } from './types'

const filterEmpty = (field?: string) => !isEmptyString(field)

export const createInteraction: CreateInteractionFunc = ({ action, payload }) => {
  const convert = (props: string[]): RemarkableString => {
    const args: string = props.filter(filterEmpty).join(SQUARE)
    return `RMRK::${action}::2.0.0::${args}`
  }

  switch (action) {
    case Interaction.ACCEPT:
      return convert([payload.id, payload.entity_type, payload.entity_id])
    case Interaction.BASE:
      return convert([wrapToString(payload.value)])
    case Interaction.BUY:
      return convert([payload.id, payload.recipient ?? ''])
    case Interaction.CHANGEISSUER:
      return convert([payload.id, payload.newissuer])
    case Interaction.BURN:
      return convert([payload.id])
    case Interaction.CREATE:
      return convert([wrapToString(payload.value)])
    case Interaction.EMOTE:
      return convert([payload.namespace, payload.id, payload.emotion])
    case Interaction.EQUIP:
      return convert([payload.id, payload.baseslot])
    case Interaction.EQUIPPABLE:
      return convert([payload.id, payload.slot, payload.value])
    case Interaction.LIST:
      return convert([payload.id, payload.price])
    case Interaction.LOCK:
      return convert([payload.id])
    case Interaction.MINT:
      return convert([wrapToString(payload.value), payload.recipient ?? ''])
    case Interaction.RESADD:
      return convert([payload.id, wrapToString(payload.value), payload.replace])
    case Interaction.SEND:
      return convert([payload.id, payload.recipient])
    case Interaction.SETPROPERTY:
      return convert([payload.id, wrapURI(payload.name), wrapURI(payload.value)])
    case Interaction.SETPRIORITY:
      // value should always be ',' separated
      return convert([payload.id, wrapToString(payload.value)])
    case Interaction.THEMEADD:
      return convert([payload.base_id, payload.name, wrapToString(payload.value)])
    default:
      throw new Error(`Unsupported action: ${action}`)
  }
}

// DEV: not sure if trasferable should be
export const createNFT = (index: number, collectionId: string, name: string | undefined, metadata: string, transferable: BinaryBoolean = 1, royalty?: RoyaltyInfo): CreatedNFT => {
  // checkProps(props)
  // const { symbol, index, transferable = 1, collectionId, metadata } = props
  const sn = toSerialNumber(index)
  const instance = makeSymbol(name)
  const royaltyInfo: IRoyaltyAttribute | undefined = royalty
    ? {
        type: 'royalty',
        value: {
          receiver: royalty.receiver,
          royaltyPercentFloat: royalty.percent
        }
      }

    : undefined
  return {
    name, // KodaFlavour, not required by RMRK v2
    sn,
    transferable,
    collection: collectionId,
    metadata,
    symbol: instance,
    properties: royaltyInfo ? { royaltyInfo } : undefined
  }
}

export const createCollection = (caller: string, symbol: string, name: string | undefined, metadata: string, max = 0): CreatedCollection => {
  return makeCollection(caller, symbol, name ?? '', metadata, max)
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
