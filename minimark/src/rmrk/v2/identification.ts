import { nanoid } from 'nanoid'
import { toLowerCase, lowerTrim } from '../../utils'
import { CreatedNFT } from './types'

export const toSerialNumber = (index: number, offset = 0, plusOne = true): string => {
  return String(index + offset + Number(plusOne)).padStart(8, '0') // TODO RMRK v2 has 8 digits
}

export const makeBaseSymbol = (symbol?: string): string => {
  return !symbol ? toLowerCase(nanoid(13)) : lowerTrim(symbol, true)
}

export const toNFTId = (nft: CreatedNFT, blockNumber: string | number): string => {
  const { collection, symbol: instance, sn } = nft
  if (!collection || !instance || !sn) {
    throw new ReferenceError('[APP] toNFTId: invalid nft')
  }

  return `${blockNumber}-${collection}-${instance}-${sn}`
}

export const toBaseId = (symbol: string, blockNumber: string | number): string => {
  if (!blockNumber || !symbol) {
    throw new EvalError('[MINIMARK] unable to construct Base ID since block or symbol is missing')
  }

  return `base-${blockNumber}-${symbol}`
}

export const toThemeId = (baseId: string, name: string): string => {
  if (!baseId || !name) {
    throw new EvalError('[MINIMARK] unable to construct Theme ID since baseId or name is missing')
  }

  return baseId.replace('base', 'theme') + '-' + name
}

export const toPartId = (baseId: string, name: string): string => {
  if (!baseId || !name) {
    throw new EvalError('[MINIMARK] unable to construct Part ID since baseId or name is missing')
  }

  return `${baseId}.${name}`
}

export const baseIdFromPartId = (partId: string): string => {
  return partId.split('.')[0]
}

export const toPropertyId = (nftId: string, key: string, value: string): string => {
  if (!nftId || !key || !value) {
    throw new EvalError('[MINIMARK] unable to construct Property ID since nftId, key or value is missing')
  }

  return `${nftId}-${key}-${value}`
}
