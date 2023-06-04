import { CreatedNFT } from './types'

export const toNFTId = (nft: CreatedNFT, blockNumber: string | number): string => {
  const { collection, instance, sn } = nft
  if (!collection || !instance || !sn) {
    throw new ReferenceError('[APP] toNFTId: invalid nft')
  }

  return `${blockNumber}-${collection}-${instance}-${sn}`
}


