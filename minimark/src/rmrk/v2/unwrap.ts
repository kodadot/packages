import { decodeHex } from '../../utils/hex'
import { unwrapURI } from '../../utils/unwrap'
import { isRemark, splitBySquare, toVersion } from '../shared/helpers'
import { resolveValue, toInteraction } from './helper'
import { UnwrappedRemark, UnwrapValue } from './types'

const unwrap = <T extends keyof UnwrapValue = 'NONE'>(text: string): UnwrappedRemark<UnwrapValue[T]> => {
  const decoded = unwrapURI(decodeHex(text))

  if (!isRemark(decoded)) {
    throw new TypeError(`RMRK: Unable to unwrap object ${decoded}`)
  }
  const [, mayInteraction, mayVersion, id, ...rest] = splitBySquare(decoded)

  const interaction = toInteraction(mayInteraction)
  const value = resolveValue(interaction, id, rest)

  return {
    interaction,
    value,
    version: toVersion(mayVersion)
  } as UnwrappedRemark<UnwrapValue[T]>
}

export { unwrap as unwrapRemarkV2 }
