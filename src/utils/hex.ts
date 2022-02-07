import { hexToString, isHex, u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/keyring'

export const decodeHex = (hex: string): string => {
  return isHex(hex) ? hexToString(hex) : hex
}

export const addressToHex = (address: string): string => {
  return isHex(address) ? address : accountToPublicKey(address)
}

const accountToPublicKey = (accountId: string): string => {
  return (accountId && u8aToHex(decodeAddress(accountId))) || ''
}
