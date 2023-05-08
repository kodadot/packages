// import { path, url } from '@vikiival/is-ipfs'
import { HTTP_REGEX, IPFS_FS_PREFIX, IPFS_NS_PREFIX, IPFS_PREFIX, SMART_IPFS_REGEX } from './constants'
import { PINATA_GATEWAY } from './gateways'
import { IPFS_HASH, IPFS_PATH, IPNS_PATH } from './types'

const isV0Cid = (cid: string): boolean => {
  return cid.length === 46 && cid.startsWith('Qm')
}

const isV1Cid = (cid: string): boolean => {
  return cid.length === 59 && cid.startsWith('baf')
}

export const isCID = (uri: string): boolean => {
  return isV0Cid(uri) || isV1Cid(uri)
  // return cid(uri)
}

export const isHTTP = (uri: string): boolean => {
  return HTTP_REGEX.test(uri)
}

export const isPath = (uri: string): boolean => {
  return /^\/ip[fn]s\//.test(uri)
  // return path(uri)
}

export const isFullPath = (uri: string): boolean => {
  return SMART_IPFS_REGEX.test(uri)
}

export const isFetchable = (uri: string): boolean => {
  return isCID(uri) || isHTTP(uri) || isPath(uri) || isFullPath(uri)
}

export const toIPFSPath = (uri: string): IPFS_HASH | IPFS_PATH | IPNS_PATH => {
  if (isCID(uri)) {
    return `/ipfs/${uri}`
  }

  if (isPath(uri)) {
    return uri as IPFS_PATH | IPNS_PATH
  }

  throw new TypeError(`Invalid IPFS URI: ${uri}`)
}

export function isDefaultPinataProvider(uri: string): boolean {
  return uri.startsWith(PINATA_GATEWAY)
  // && url(uri)
}

export const canBeIPFS = (uri: string): boolean => {
  return isCID(uri) || isPath(uri)
}

export const extractIPFS = (uri: string): IPFS_HASH | IPFS_PATH | IPNS_PATH => {
  if (uri.startsWith(IPFS_FS_PREFIX) || uri.startsWith(IPFS_NS_PREFIX)) {
    return uri.replace('ipfs:/', '') as IPFS_PATH | IPNS_PATH
  }

  return uri.replace(IPFS_PREFIX, '') as IPFS_HASH
}
