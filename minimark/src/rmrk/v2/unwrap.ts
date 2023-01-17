import { decodeHex } from '../../utils/hex'
import { unwrapURI } from '../../utils/unwrap'
import { isRemark, splitBySquare, toVersion } from '../shared/helpers'
import { toInteraction, resolveValue } from './helper'
import { UnwrappedRemark, InteractionValue } from './types'

const unwrap = <T = InteractionValue>(text: string): UnwrappedRemark<T | InteractionValue> => {
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
  }
}

export { unwrap as unwrapRemarkV2 }
