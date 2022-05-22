import { addressToHex } from '../utils/hex'
import { toUpperCase, upperTrim } from '../utils/string'
import { nanoid } from 'nanoid'
import { CreatedNFT } from './types'

export const toSerialNumber = (index: number, offset = 0, plusOne = true): string => {
  return String(index + offset + Number(plusOne)).padStart(16, '0')
}

export function toCollectionId(caller: string, symbol: string): string {
  if (!caller) {
    throw new ReferenceError(`[RMRK] Could not create collection, because caller is empty`)
  }

  const pubkey = addressToHex(caller)

  return (pubkey?.substr(2, 10) + pubkey?.substring(pubkey.length - 8) + '-' + (symbol || '')).toUpperCase()
}

export const makeSymbol = (symbol?: string): string => {
  return !symbol ? toUpperCase(nanoid(13)) : upperTrim(symbol, true)
}

export const toNFTId = (nft: CreatedNFT, blocknumber: string | number): string => {
  const { collection, instance, sn } = nft
  if (!collection || !instance || !sn) {
    throw new ReferenceError('[APP] toNFTId: invalid nft')
  }

  return `${blocknumber}-${collection}-${instance}-${sn}`
}

export const findUniqueSymbol = (symbol: string | undefined, usedSymbols: string[]): string => {
  let result = symbol || makeSymbol()
  const hasSymbol = usedSymbols.includes(result)
  if (!hasSymbol) {
    return result
  }

  return findUniqueSymbol(undefined, usedSymbols)
}
