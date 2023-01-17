import { isEmpty, trim, wrapToString } from '../../utils'
import { makeSymbol, toCollectionId } from './identification'
import { AbstractCreatedCollection, RemarkableString, RemarkVersion } from './types'

export const makeCollection = (caller: string, symbol: string, name: string, metadata: string, max = 0): AbstractCreatedCollection => {
  if (max < 0) {
    throw new Error('max should be equal or greater than zero')
  }

  const theSymbol = makeSymbol(symbol)
  return {
    id: toCollectionId(caller, theSymbol),
    symbol: theSymbol,
    issuer: caller,
    name: trim(name),
    max,
    metadata
  }
}

export const makeInteraction = <I, T = string>(action: I, version: RemarkVersion = '1.0.0', objectId: string, meta: T): RemarkableString => {
  if (!objectId) {
    throw new ReferenceError(`[${action}] Could not create, because nftId`)
  }

  return `RMRK::${action}::${version}::${objectId}${meta ? '::' + meta : ''}`
}

export const makeCreateInteaction = <I, T extends Record<string, any>>(action: I, version: RemarkVersion = '1.0.0', object: T): RemarkableString => {
  if (isEmpty(object)) {
    throw new ReferenceError(`[${action}] Could not create, because ${object} is empty`)
  }

  return `RMRK::${action}::${version}::${wrapToString(object)}`
}
