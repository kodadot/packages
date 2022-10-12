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
export enum InteractionV2 {
  ACCEPT = 'ACCEPT',
  BASE = 'BASE',
  EQUIP = 'EQUIP',
  EQUIPPABLE = 'EQUIPPABLE',
  LOCK = 'LOCK',
  RESADD = 'RESADD',
  SETPROPERTY = 'SETPROPERTY',
  SETPRIORITY = 'SETPRIORITY',
  THEMEADD = 'THEMEADD',
}

export type OnlyMintInteraction = Interaction.MINT | Interaction.MINTNFT

// type JSONFiled = Record<string, string> | undefined

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

export type AbstractCreatedNFT = {
  collection: string
  transferable: BinaryBoolean | number
  sn: string
  metadata: string
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

export type IPFSUri = `ipfs://${string}` | `ipfs://ipfs/${string}`
