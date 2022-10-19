import { toArweavePath } from './arweave'
import { canBeIPFS, isDefaultPinataProvider, toIPFSPath } from './cid'
import { ARWEAVE_REGEX, HTTP_REGEX, IPFS_REGEX } from './constants'
import { PINATA_GATEWAY } from './gateways'
import { HTTPS_URI, IPFS_PATH, IPNS_PATH, SanitizedOutput } from './types'

export function sanitize(path: string): SanitizedOutput {
  if (IPFS_REGEX.test(path) || canBeIPFS(path)) {
    return { path: toIPFSPath(path), needProvider: true }
  }

  if (HTTP_REGEX.test(path)) {
    if (isDefaultPinataProvider(path)) {
      return { path: path.replace(PINATA_GATEWAY, '') as IPFS_PATH | IPNS_PATH, needProvider: true }
    }
    return { path: path as HTTPS_URI, needProvider: false }
  }

  if (ARWEAVE_REGEX.test(path)) {
    return { path: toArweavePath(path), needProvider: false }
  }
}
