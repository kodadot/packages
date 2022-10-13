import { UpdateFunction } from '../../common/types'
import { trim, upperTrim } from '../../utils/string'
import { toSerialNumber } from '../identification'
import { makeCollection, makeCreateInteaction, makeInteraction } from '../shared/make'
import { RemarkVersion } from '../types'
import { CreatedCollection, CreatedCollectionWithNFT, CreatedNFT, JustInteraction, OnlyMintInteraction } from './types'

export const createInteraction = (action: JustInteraction, version = '1.0.0', objectId: string, meta: string): string => {
  return makeInteraction(action, version as RemarkVersion, objectId, meta)
}

export const createMintInteaction = (action: OnlyMintInteraction, version = '1.0.0', object: CreatedNFT | CreatedCollection): string => {
  return makeCreateInteaction(action, version as RemarkVersion, object)
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
  return makeCollection(caller, symbol, name, metadata, max)
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
    nfts
  }
}
