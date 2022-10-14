import * as ss58 from '@subsquid/ss58'
import { decodeHex } from '@subsquid/substrate-processor'

let prefix: string = 'kusama'

function addressOf(address: Uint8Array | string): string {
  const value = typeof address === 'string' ? decodeHex(address) : address
  if (!value) {
    return ''
  }
  return ss58.codec(prefix).encode(value)
}

const SquidUtils = (chain?: string) => {
  prefix = chain ?? prefix
  return {
    addressOf
  }
}

export { SquidUtils }

// Usage:
// import { SquidUtils } from '@kodadot1/metasquid'
// const utils = SquidUtils('kusama')
// export utils
