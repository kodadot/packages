import { HTTPS_URI, IPFS_PATH, IPNS_PATH } from './types'
export const PINATA_GATEWAY: HTTPS_URI = 'https://gateway.pinata.cloud'

// LIST: https://ipfs.github.io/public-gateway-checker/
export type IPFSProviders =
  | 'aragon'
  | 'astyanax'
  | 'cloudflare'
  | 'dweb'
  | 'filebase_kodadot'
  | 'fission'
  | 'fleek'
  | 'gateway'
  | 'infura'
  | 'chaotic'
  | 'ipfs'
  | 'kodadot'
  | 'kodadot_beta'
  | 'nectarnode'
  | 'nftstorage'
  | 'rmrk'
  | 'storry'
  | 'w3s'

export type AvailableProviders = IPFSProviders[]

export const ipfsProviders: Record<IPFSProviders, HTTPS_URI> = {
  aragon: 'https://ipfs.eth.aragon.network',
  astyanax: 'https://ipfs.astyanax.io',
  cloudflare: 'https://cloudflare-ipfs.com',
  dweb: 'https://dweb.link',
  filebase_kodadot: 'https://kodadot-ultra.myfilebase.com',
  fission: 'https://ipfs.runfission.com',
  fleek: 'https://ipfs.fleek.co',
  gateway: 'https://gateway.ipfs.io',
  infura: 'https://infura-ipfs.io',
  chaotic: 'https://bucket.chaotic.art',
  ipfs: 'https://ipfs.io',
  kodadot: 'https://image.w.kodadot.xyz',
  kodadot_beta: 'https://image-beta.w.kodadot.xyz',
  nectarnode: 'https://ipfs.nectarnode.io',
  nftstorage: 'https://nftstorage.link',
  rmrk: 'https://ipfs2.rmrk.link',
  storry: 'https://ipfs.storry.tv',
  w3s: 'https://ipfs.w3s.link',  
}

const DEFAULT_PROVIDER_LIST: AvailableProviders = [
  'kodadot',
  'filebase_kodadot'
]

export const getProviderList = (
  providers: AvailableProviders = DEFAULT_PROVIDER_LIST
): HTTPS_URI[] => {
  const list: AvailableProviders = providers.length
    ? providers
    : DEFAULT_PROVIDER_LIST
  return list.map(provider => ipfsProviders[provider])
}

export const getProperURI = (
  uri: IPFS_PATH | IPNS_PATH,
  providers: AvailableProviders = []
): HTTPS_URI[] => {
  const providerList = getProviderList(providers)
  return providerList.map<HTTPS_URI>(provider => `${provider}${uri}`)
}

export const getGatewayURI =
  (uri: IPFS_PATH | IPNS_PATH) => (provider: IPFSProviders): HTTPS_URI => {
    return `${ipfsProviders[provider]}${uri}`
  }
