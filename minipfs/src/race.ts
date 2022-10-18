// import { AvailableProviders } from './gateways'
// import { $fetch } from 'ohmyfetch'
// import { Callback, UnwrapCallback } from './types'

// export const race = async <T, X, R = any>(param: X, callback: UnwrapCallback, providers: AvailableProviders) => {
//   return Promise.race()
// }

// const getSingle = <T>(url: string, baseURL: string): Promise<T> => $fetch<T>(url, { baseURL })

export const DEFAULT_PROVIDER_LIST = [
  'https://cloudflare-ipfs.com',
  'https://kodadot.mypinata.cloud',
  'https://nftstorage.link'
]
export type ProviderUrl = typeof DEFAULT_PROVIDER_LIST[number];

export const ipfsGet = <T extends Response>(
  url: string,
  providers: ProviderUrl[] = DEFAULT_PROVIDER_LIST
): Promise<T> => {
  const [hash] =
    (
      url.match(/^(ipfs:\/\/)*(ipfs\/)*([a-zA-Z0-9]+)$/) as RegExpMatchArray
    )?.reverse() ?? []
  if (!hash) {
    throw new TypeError(`Invalid IPFS URL: ${url}`)
  }
  return Promise.race<T>(
    providers.map<Promise<T>>(
      provider => fetch(`${provider}/ipfs/${hash}`) as Promise<T>
    )
  )
}
