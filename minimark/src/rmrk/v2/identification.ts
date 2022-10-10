import { CreatedNFT } from './types'

export const toSerialNumber = (index: number, offset = 0, plusOne = true): string => {
  return String(index + offset + Number(plusOne)).padStart(8, '0') // TODO RMRK v2 has 8 digits
}


export const toNFTId = (nft: CreatedNFT, blocknumber: string | number): string => {
  const { collection, symbol: instance, sn } = nft
  if (!collection || !instance || !sn) {
    throw new ReferenceError('[APP] toNFTId: invalid nft')
  }

  return `${blocknumber}-${collection}-${instance}-${sn}`
}
