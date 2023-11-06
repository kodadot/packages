import { AvailableProviders, getProperURI } from './gateways'
import { obtain, obtainFast } from './obtain'
import { competition } from './race'
import { sanitize } from './sanitize'
import { HTTPS_URI, IPFS_PATH, IPNS_PATH, SanitizedOutput, URI } from './types'

export function $obtain<T>(
  uri: URI | string,
  providers: AvailableProviders = [],
  fast?: boolean
): Promise<T> {
  const { needProvider, path, formatter }: SanitizedOutput = sanitize(uri)
  const callback = fast ? obtainFast : obtain

  if (formatter) {
    return Promise.resolve(formatter<T>(path as string))
  }

  if (needProvider) {
    return competition<T>(path as IPFS_PATH | IPNS_PATH, providers, callback)
  }

  return callback(path)
}

export function $purify(
  uri: URI | string,
  providers: AvailableProviders = []
): HTTPS_URI[] {
  const { needProvider, path }: SanitizedOutput = sanitize(uri)

  if (needProvider) {
    return getProperURI(path as IPFS_PATH | IPNS_PATH, providers)
  }

  return [path as HTTPS_URI]
}
