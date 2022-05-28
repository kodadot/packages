import { isEmpty } from '../utils/empty'
import { trim, upperTrim } from '../utils/string'
import { UpdateFunction } from '../common/types'
import { wrapToString } from '../utils/unwrap'
import { toCollectionId, toSerialNumber, makeSymbol } from './identification'
import { CreatedCollection, CreatedCollectionWithNFT, CreatedNFT, JustInteraction, OnlyMintInteraction } from './types'

export const createInteraction = (action: JustInteraction, version = '1.0.0', objectId: string, meta: string): string => {
  if (!objectId) {
    throw new ReferenceError(`[${action}] Could not create, because nftId`)
  }

  return `RMRK::${action}::${version}::${objectId}${meta ? '::' + meta : ''}`
}

export const createMintInteaction = (action: OnlyMintInteraction, version = '1.0.0', object: CreatedNFT | CreatedCollection): string => {
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
    currentOwner: caller,
  }
}

export const createCollection = (caller: string, symbol: string, name: string, metadata: string, max = 0): CreatedCollection => {
  const theSymbol = makeSymbol(symbol)
  return {
    id: toCollectionId(caller, theSymbol),
    symbol: theSymbol,
    issuer: caller,
    name: trim(name),
    max,
    metadata,
  }
}

export const createMultipleNFT = (
  max: number,
  caller: string,
  collectionId: string,
  name: string,
  metadata: string,
  offset = 0,
  updateName?: UpdateFunction
): CreatedNFT[] => {
  return Array(max)
    .fill(null)
    .map((_, i) => createNFT(caller, i + offset, collectionId, updateName ? updateName(name, i) : name, metadata))
}

export const createCollectionWithNFT = (
  max: number,
  caller: string,
  symbol: string,
  name: string,
  metadata: string,
  updateName?: UpdateFunction
): CreatedCollectionWithNFT => {
  const collection = createCollection(caller, symbol, name, metadata, max)
  const nfts = createMultipleNFT(max, caller, collection.id, name, metadata, 0, updateName)

  return {
    collection,
    nfts,
  }
}
