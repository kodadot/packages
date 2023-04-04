import type { CreatedBase } from './types'

export function checkBase({ symbol, parts, themes }: CreatedBase) {
  if (symbol.includes('.') || symbol.includes('-')) {
    throw new Error('Symbol must not use dashes or dots')
  }

  if (Array.isArray(parts) && parts.some(part => !part.id)) {
    throw new Error('Id is required for part')
  }

  if (themes && !Object.keys(themes).includes('default')) {
    throw new Error('Missing default key for theme')
  }
}

export function isTransferable(nft: { blockNumber: bigint, transferable: number }, currentBlock: number) {
  const block = Number(nft.blockNumber)
  return (
    nft.transferable === 1 ||
    (nft.transferable < 0 && block - nft.transferable >= currentBlock) ||
    (nft.transferable > 1 && currentBlock >= nft.transferable)
  )
}
