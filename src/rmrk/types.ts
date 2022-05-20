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

export type UnwrappedRemark<T> = {
  interaction: Interaction
  value: T
  version: string
}

export type InteractionValue = {
  id: string
  value?: string
}

export type BinaryBoolean = 0 | 1

export type CreatedCollection = {
  id: string
  issuer: string
  max: number
  metadata: string
  name: string
  symbol: string
}

export type CreatedNFT = {
  collection: string
  instance: string
  metadata: string
  name: string
  sn: string
  transferable: BinaryBoolean
  currentOwner: string
}

export type CreatedCollectionWithNFT<C = CreatedCollection, N = CreatedNFT[]> = {
  collection: C
  nfts: N
}
