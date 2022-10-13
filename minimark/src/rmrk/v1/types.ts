import { AbstractCreatedNFT, BinaryBoolean, UnwrappedRemark as AbstractRemarkWrapper } from '../shared/types'

// v1
export enum Interaction {
  MINT = 'MINT',
  MINTNFT = 'MINTNFT',
  LIST = 'LIST',
  UNLIST = 'UNLIST',
  BUY = 'BUY',
  SEND = 'SEND',
  CONSUME = 'CONSUME',
  CHANGEISSUER = 'CHANGEISSUER',
  EMOTE = 'EMOTE',
}

export type JustInteraction = Exclude<Interaction, Interaction.MINT | Interaction.MINTNFT | Interaction.UNLIST>
export type OnlyMintInteraction = Interaction.MINT | Interaction.MINTNFT

export type UnwrappedRemark<T> = AbstractRemarkWrapper<T, Interaction>

export type InteractionValue = {
  id: string
  value?: string
}

export type CreatedCollection = {
  id: string
  issuer: string
  max: number
  metadata: string
  name: string
  symbol: string
}

export type CreatedNFT = AbstractCreatedNFT & {
  instance: string
  name: string
  currentOwner: string
  transferable: BinaryBoolean
}

export type CreatedCollectionWithNFT<C = CreatedCollection, N = CreatedNFT[]> = {
  collection: C
  nfts: N
}
