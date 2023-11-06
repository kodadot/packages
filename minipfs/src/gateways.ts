import { HTTPS_URI, IPFS_PATH, IPNS_PATH } from './types'
export const PINATA_GATEWAY: HTTPS_URI = 'https://gateway.pinata.cloud'

// LIST: https://ipfs.github.io/public-gateway-checker/
export type IPFSProviders =
  | 'apillon'
  | 'aragon'
  | 'astyanax'
  | 'cf'
  | 'cloudflare'
  | 'dweb'
  | 'filebase_kodadot'
  | 'fleek'
  | 'gateway'
  | 'infura'
  | 'infura_kodadot1'
  | 'ipfs'
  | 'kodadot'
  | 'kodadot_beta'
  | 'nftstorage'
  | 'rmrk'

export type AvailableProviders = IPFSProviders[]

export const ipfsProviders: Record<IPFSProviders, HTTPS_URI> = {
  apillon: 'https://ipfs.apillon.io',
  aragon: 'https://ipfs.eth.aragon.network',
  astyanax: 'https://ipfs.astyanax.io',
  cf: 'https://cf-ipfs.com',
  cloudflare: 'https://cloudflare-ipfs.com',
  dweb: 'https://dweb.link',
  filebase_kodadot: 'https://kodadot-ultra.myfilebase.com',
  fleek: 'https://ipfs.fleek.co',
  gateway: 'https://ipfs-gateway.cloud',
  infura: 'https://infura-ipfs.io',
  infura_kodadot1: 'https://kodadot1.infura-ipfs.io',
  ipfs: 'https://gateway.ipfs.io',
  kodadot: 'https://image.w.kodadot.xyz',
  kodadot_beta: 'https://image-beta.w.kodadot.xyz',
  nftstorage: 'https://nftstorage.link',
  rmrk: 'https://ipfs2.rmrk.link'
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
  (uri: IPFS_PATH | IPNS_PATH) =>
    (provider: IPFSProviders): HTTPS_URI => {
      return `${ipfsProviders[provider]}${uri}`
    }
