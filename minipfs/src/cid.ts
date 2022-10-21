import { cid, path, url } from '@vikiival/is-ipfs'
import { HTTP_REGEX, IPFS_FS_PREFIX, IPFS_NS_PREFIX, IPFS_PREFIX } from './constants'
import { PINATA_GATEWAY } from './gateways'
import { IPFS_HASH, IPFS_PATH, IPNS_PATH } from './types'

export const isCID = (uri: string): boolean => {
  return cid(uri)
}

export const isHTTP = (uri: string): boolean => {
  return HTTP_REGEX.test(uri)
}

export const isPath = (uri: string): boolean => {
  return path(uri)
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
  return uri.startsWith(PINATA_GATEWAY) && url(uri)
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
