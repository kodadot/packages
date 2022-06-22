// LIST: https://ipfs.github.io/public-gateway-checker/
export type IPFSProviders =
  | 'pinata'
  | 'cloudflare'
  | 'ipfs'
  | 'dweb'
  | 'kodadot'
  | 'rmrk'
  | 'fleek'
  | 'nftstorage'
  | 'aragon'
  | 'cf'
  | 'infura'
  | 'gateway'

export type AvailableProviders = IPFSProviders[]

export const ipfsProviders: Record<IPFSProviders, string> = {
  pinata: 'https://kodadot.mypinata.cloud/',
  cloudflare: 'https://cloudflare-ipfs.com/',
  ipfs: 'https://ipfs.io/',
  dweb: 'https://dweb.link/',
  kodadot: 'https://kodadot.mypinata.cloud/',
  rmrk: 'https://rmrk.mypinata.cloud/',
  fleek: 'https://ipfs.fleek.co',
  nftstorage: 'https://nftstorage.link/',
  aragon: 'https://ipfs.eth.aragon.network/',
  cf: 'https://cf-ipfs.com/',
  infura: 'https://infura-ipfs.io/',
  gateway: 'https://ipfs-gateway.cloud/'
}

export const getProviderList = (providers: AvailableProviders): string[] => {
  return providers.map(provider => ipfsProviders[provider])
}

// export const getProperUrl = (ipfsLink: string, providers: AvailableProviders): string[] => {

// }
