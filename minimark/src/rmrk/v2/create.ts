import { CreateInteractionProps, CreatedCollectionV2, CreatedNFTV2, CreatedBASE } from './types'
import { InteractionV2 } from './constants'
// import { isEmpty } from '../../utils/empty'
import { wrapToString, wrapURI } from '../../utils'
import { checkProps } from '../../utils/empty';
import { makeSymbol, toCollectionId, toSerialNumber } from '../identification'

type createInteractionProps = (props: CreateInteractionProps) => string

export const createInteraction: createInteractionProps = ({ action, payload }) => {
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
      throw new Error(`Unsupported action: ${action}`);
  }

  throw new Error(`Unsupported action: ${action}`);
}

type CreateNFTProps = {
  collectionId: string
  symbol: string
  transferable: number
  index: number
  metadata: string
}

type CreateNFTFunc = (props: CreateNFTProps) => CreatedNFTV2

export const createNFTV2: CreateNFTFunc = (props) => {
  checkProps(props)
  const { symbol, index, transferable = 1, collectionId, metadata } = props
  const sn = toSerialNumber(index)
  const theSymbol = makeSymbol(symbol)
  return {
    sn,
    transferable,
    collection: collectionId,
    metadata,
    symbol: theSymbol,
  }
}


type CreateCollectionProps = {
  issuer: string
  max: number
  metadata: string
  symbol: string
}

type createCollectionFunc = (props: CreateCollectionProps) => CreatedCollectionV2

export const createCollection: createCollectionFunc = (props) => {
  checkProps(props)
  const {
    issuer,
    symbol,
    max,
    metadata,
  } = props || {}

  if (max < 0) {
    throw new Error("max should be equal or greater than zero");
  }
  const theSymbol = makeSymbol(symbol)
  return {
    id: toCollectionId(issuer, theSymbol),
    symbol: theSymbol,
    issuer: issuer,
    metadata,
    max,
  }
}

export const createBase = (props: CreatedBASE) => {
  const { symbol = '', parts = [], themes } = props
  if (symbol.includes('.') || symbol.includes('-')) {
    throw new Error("Symbol must not use dashes or dots");
  }

  if (Array.isArray(parts) && parts.some(part => !part.id)) {
    throw new Error("Id is required for part")
  }

  if(themes && !Object.keys(themes).includes('default')) {
    throw new Error("Missing default key for theme");
  }

  return {
    ...props,
    symbol: makeSymbol(symbol),
  }
}