import { cid, path } from 'is-ipfs'
import { HTTP_REGEX } from './constants'

export const isCID = (uri: string): boolean => {
  return cid(uri)
}

export const isHTTP = (uri: string): boolean => {
  return HTTP_REGEX.test(uri)
}

export const isPath = (uri: string): boolean => {
  return path(uri)
}

export const toIPFSPath = (uri: string): string => {
  if (isCID(uri)) {
    return `/ipfs/${uri}`
  }

  if (isPath(uri)) {
    return uri
  }

  throw new TypeError(`Invalid IPFS URI: ${uri}`)
}

// Exported from kodadot
// export const isIpfsCid = (url: stng): boolean => {
//   return /^[0-9a-zA-Z]{44,}$/.test(url)
// }

