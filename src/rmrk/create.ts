import { isEmpty } from '../utils/empty'
import { trim, upperTrim } from '../utils/string'
import { wrapToString } from '../utils/unwrap'
import { toCollectionId, toSerialNumber } from './identification'
import { CreatedCollection, CreatedNFT, JustInteraction, OnlyMintInteraction } from './types'

export const createInteraction = (action: JustInteraction, version = '1.0.0', objectId: string, meta: string): string =>  {
  if (!objectId) {
    throw new ReferenceError(`[${action}] Could not create, because nftId`)
  }

  return `RMRK::${action}::${version}::${objectId}${meta ? '::' + meta : ''}`
}

export const createMintInteaction = (action: OnlyMintInteraction, version = '1.0.0', object: CreatedNFT | CreatedCollection): string =>  {
  if (isEmpty(object)) {
    throw new ReferenceError(`[${action}] Could not create, because ${object} is empty`)
  }

  return `RMRK::${action}::${version}::${wrapToString(object)}`
}

export const createNFT = (caller: string, index: number, collectionId: string, name: string, metadata: string): CreatedNFT => {
  const instance = upperTrim(name, true)
  const sn = toSerialNumber(index)
  return {
    name: trim(name),
    instance,
    transferable: 1,
    collection: collectionId,
    sn,
    metadata,
    currentOwner: caller
  }
}

export const createCollection = (caller: string, symbol: string, name: string, metadata: string, max = 0): CreatedCollection => {
  const trimmedSymbol = upperTrim(symbol, true)
  return {
    id: toCollectionId(caller, trimmedSymbol),
    symbol: trimmedSymbol,
    issuer: caller,
    name: trim(name),
    max,
    metadata,
  }
}