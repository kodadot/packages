import { nanoid } from 'nanoid'
import { addressToHex } from '../../utils/hex'
import { isEmptyString, toUpperCase, upperTrim } from '../../utils/string'

export const toSerialNumber = (index: number, offset = 0, plusOne = true): string => {
  return String(index + offset + Number(plusOne)).padStart(16, '0')
}

export function toCollectionId(caller: string, symbol: string): string {
  if (!caller) {
    throw new ReferenceError('[RMRK] Could not create collection, because caller is empty')
  }

  const pubkey = addressToHex(caller)
  return (pubkey?.substr(2, 10) + pubkey?.substring(pubkey.length - 8) + '-' + (symbol || '')).toUpperCase()
}

export const makeSymbol = (symbol?: string): string => {
  return !symbol ? toUpperCase(nanoid(13)) : upperTrim(symbol, true)
}

export const toNFTId = (collectionId: string, symbol: string, serialNumber: string, blocknumber: string | number): string => {
  if (isEmptyString(collectionId) || isEmptyString(symbol) || isEmptyString(serialNumber)) {
    throw new ReferenceError('[MINIMARK] toNFTId: invalid nft')
  }

  return `${blocknumber}-${collectionId}-${symbol}-${serialNumber}`
}

export const findUniqueSymbol = (symbol: string | undefined, usedSymbols: string[]): string => {
  const result = symbol || makeSymbol()
  const hasSymbol = usedSymbols.includes(result)
  if (!hasSymbol) {
    return result
  }

  return findUniqueSymbol(undefined, usedSymbols)
}
