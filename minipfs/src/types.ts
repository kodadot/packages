export type Callback<T = any, V = any> = (param: T) => Promise<V>
export type UnwrapCallback<T> = (param: T) => string

// Fancy
export type HTTPS_URI = `https://${string}/`
export type IPFS_URI = `ipfs://${string}`
