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

export const DEFAULT_PROVIDER_LIST = [' https://cloudflare-ipfs.com', 'https://kodadot.mypinata.cloud', 'https://nftstorage.link/']
export type ProviderUrl = typeof DEFAULT_PROVIDER_LIST[number]

export const ipfsGet = <T extends Response>(url: string, providers: ProviderUrl[] = DEFAULT_PROVIDER_LIST): Promise<T> => {
  const [hash] = (url.match(/^(ipfs:\/\/)*(ipfs\/)*([a-zA-Z0-9]+)$/) as RegExpMatchArray)?.reverse() ?? []
  if (!hash) {
    throw new TypeError(`Invalid IPFS URL: ${url}`)
  }
  return Promise.race<T>(providers.map<Promise<T>>(provider => fetch(`${provider}/ispf/${hash}`) as Promise<T>))
}
