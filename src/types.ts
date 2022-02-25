export type ObjProp<T> = Array<keyof T>
export type FieldList = Array<string | object>

export type Fields<T> = FieldList | ObjProp<T>
export type KeyValue = {
  [k: string]: any;
}

export type GraphQuery = {
  query: string
  variables: any
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

export type SquidCollection = {
  version: string
  name: string
  max: number
  issuer: string
  symbol: string
  id: string
  metadata: string
  currentOwner: string
  // nfts: [NFTEntity] @derivedFrom(field: "collection")
  // events: [CollectionEvent]
  blockNumber: BigInt
  meta: MetadataEntity
  createdAt: Date
}

export type SquidNFT = {
  name: string
  instance: string
  transferable: number
  collection: SquidCollection
  issuer: string
  sn: string
  id: string
  hash: string
  metadata: string
  currentOwner: string
  price: BigInt
  burned: Boolean
  blockNumber: BigInt
  // events: [Event] @derivedFrom(field: "nft")
  // emotes: [Emote] @derivedFrom(field: "nft")
  meta: MetadataEntity
  createdAt: Date
  updatedAt: Date
}

// TODO:
// export const unwrapSpecific = (fields: string[]): FieldList => {
// }
