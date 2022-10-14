export const addPrefix = (url: string): string => {
  return `ipfs://ipfs/${url}`
}

const cidRegex = /ipfs\/([a-zA-Z0-9]+)\/?$/
export const extractCid = (ipfsLink?: string): string => {
  if (!ipfsLink) {
    return ''
  }

  const match = ipfsLink.match(cidRegex)

  return match ? match[1] : ''
}

export const justHash = (ipfsLink?: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(ipfsLink || '')
}

export const unSanitizeIpfsUrl = (url: string): string => {
  return justHash(url) ? addPrefix(url) : url
}
