import { hexToString , isHex } from '@polkadot/util'

export const decodeHex = (hex: string): string => {
  return isHex(hex) ? hexToString(hex) : hex
}
