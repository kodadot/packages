export type MetadataMap = Record<string, unknown>

export type IPFS_PATH = `/ipfs/${string}`
export type IPNS_PATH = `/ipns/${string}`
export type IPFS_HASH = `Qm${string}` | `ba${string}`
// Fancy
export type HTTPS_URI = `https://${string}`
export type IPFS_URI = `ipfs://${string}`
export type ARWEAVE_URI = `ar://${string}`
export type IPFS = IPFS_PATH | IPNS_PATH | IPFS_HASH | IPFS_URI

export type URI = HTTPS_URI | IPFS | ARWEAVE_URI

export type Formatter = <T>(uri: string) => T

export type SanitizedOutput = {
  path: HTTPS_URI | IPFS
  needProvider: boolean
  formatter?: Formatter
}

export type Callback<T = any, V = any> = (param: T) => Promise<V>
export type UnwrapCallback<T> = (param: T) => string
export type FetchCallback<T> = (param: URI) => Promise<T>
