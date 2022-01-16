import { addressToHex } from '../utils/hex'

export const toSerialNumber = (index: number, offset = 0, plusOne = true): string =>  {
  return String(index + offset + Number(plusOne)).padStart(16, '0')
}

export function toCollectionId(caller: string, symbol: string): string {
  if (!caller) {
    throw new ReferenceError(`[RMRK] Could not create collection, because caller is empty`)
  }

  const pubkey = addressToHex(caller)

  return (
    pubkey?.substr(2, 10) +
    pubkey?.substring(pubkey.length - 8) +
    '-' +
    (symbol || '')
  ).toUpperCase()
}