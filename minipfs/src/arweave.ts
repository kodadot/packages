// B3K2Ybpl43hICaZT8ekwehfWXO8zhMipuYXOhATXUd8
// sTHc-EK1UcA32wGF1fwD-Tbuc5Cn2Bsup6bwdzUKqlE

import { ARWEAVE_REGEX } from './constants'
import { HTTPS_URI } from './types'

const ARWEAVE_BASE = 'https://arweave.net/'

export const toArweavePath = (uri: string): HTTPS_URI => {
  const hash = uri.replace(ARWEAVE_REGEX, '')
  return `${ARWEAVE_BASE}${hash}`
}
