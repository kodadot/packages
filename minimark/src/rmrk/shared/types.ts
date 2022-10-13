// meta
export type RemarkVersion = `${1 | 2}.${0}.${0}`
type LegacyRemarkVersion = '0.0.1'
export type VersionedRemark = LegacyRemarkVersion | RemarkVersion
export type BinaryBoolean = 0 | 1

export type AbstractCreatedNFT = {
  collection: string
  transferable: BinaryBoolean | number
  sn: string
  metadata: string
}

export type UnwrappedRemark<T, I> = {
  interaction: I
  value: T
  version: VersionedRemark
}

// fancy
export type IPFSUri = `ipfs://${string}` | `ipfs://ipfs/${string}`

export type JSONField = Record<string, string>
