import { JustInteraction } from './types'

export const createInteraction = (action: JustInteraction, version = '1.0.0', objectId: string, meta: string): string =>  {
  if (!objectId) {
    throw new ReferenceError(`[${action}] Could not create, because nftId`)
  }

  return `RMRK::${action}::${version}::${objectId}${meta ? '::' + meta : ''}`
}