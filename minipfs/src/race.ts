// import { AvailableProviders } from './gateways'
import { AvailableProviders, getProviderList } from './gateways'
import { HTTPS_URI, IPFS_PATH, IPNS_PATH, FetchCallback } from './types'

// export const race = async <T, X, R = any>(param: X, callback: UnwrapCallback, providers: AvailableProviders) => {
//   return Promise.race()
// }

// const getSingle = <T>(url: string, baseURL: string): Promise<T> => $fetch<T>(url, { baseURL })

export function competition<T>(
  path: IPFS_PATH | IPNS_PATH,
  providers: AvailableProviders = [],
  callback: FetchCallback<T>
): Promise<T> {
  const providerList = getProviderList(providers)

  const urls: Promise<T>[] = providerList
    .map<HTTPS_URI>(provider => `${provider}${path}`)
    .map(uri => callback(uri))

  return Promise.race(urls)
}
