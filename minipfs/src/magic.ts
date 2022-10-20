import { AvailableProviders } from './gateways'
import { obtain, obtainSafe } from './obtain'
import { competition } from './race'
import { sanitize } from './sanitize'
import { IPFS_PATH, IPNS_PATH, SanitizedOutput, URI } from './types'

export function $obtain<T>(uri: URI | string, providers: AvailableProviders = [], safe: boolean = true): Promise<T> {
  const { needProvider, path }: SanitizedOutput = sanitize(uri)
  const callback = safe ? obtainSafe : obtain

  if (needProvider) {
    return competition<T>(path as IPFS_PATH | IPNS_PATH, providers, callback)
  }

  return callback(path)
}
