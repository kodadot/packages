export type KeyOf<T> = keyof T
export type ObjProp<T> = Array<KeyOf<T>>
export type FieldList = Array<string | object>

export type Fields<T> = FieldList | ObjProp<T>
export type KeyValue = {
  [k: string]: any;
}

export type GraphQuery = {
  query: string
  variables: any
}

export type QueryOptions = {
  limit?: number
  offset?: number
  orderBy?: string
}

type MetadataEntity = {
  id: string
  name: string
  description: string
  image: string
  // attributes: [Attribute!]
  animationUrl: string
  type: string
}

export type BaseCollection = {
  version: string
  name: string
  max: number
  issuer: string
  symbol: string
  id: string
  metadata: string
  currentOwner: string
  blockNumber: BigInt
  createdAt: Date
}

export type SquidCollection = BaseCollection & {
  // nfts: [NFTEntity] @derivedFrom(field: "collection")
  // events: [CollectionEvent]
  meta: MetadataEntity
}

export type BaseNFT = {
  name: string
  instance: string
  transferable: number
  collection: SquidCollection
  issuer: string
  sn: string
  id: string
  metadata: string
  currentOwner: string
  price: BigInt
  burned: Boolean
  blockNumber: BigInt
  createdAt: Date
  updatedAt: Date
}

export type SquidNFT = BaseNFT & {
  hash: string
  // events: [Event] @derivedFrom(field: "nft")
  // emotes: [Emote] @derivedFrom(field: "nft")
  meta: MetadataEntity
}

// TODO:
// export const unwrapSpecific = (fields: string[]): FieldList => {
// }
