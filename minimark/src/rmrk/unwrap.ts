import { decodeHex } from '../utils/hex'
import { unwrapURI } from '../utils/unwrap'
import { isRemark, resolveValue, splitBySquare, toInteraction, toVersion, resolveRmrk2Value, toInteractionV2 } from './helpers'
import { InteractionValue, UnwrappedRemark, InteractionV2Value, UnwrappedRemark2 } from './types'

const unwrap = <T = InteractionValue>(text: string): UnwrappedRemark<T | InteractionValue> => {
  const decoded = unwrapURI(decodeHex(text))

  if (!isRemark(decoded)) {
    throw new TypeError(`RMRK: Unable to unwrap object ${decoded}`)
  }

  // DEV: skipping prefix intetionally
  const [, mayInteraction, mayVersion, mayIdOrValue, mayValue] = splitBySquare(decoded)

  const interaction = toInteraction(mayInteraction)

  const value = resolveValue<T>(interaction, mayIdOrValue, mayValue)

  if (!value) {
    throw new TypeError(`RMRK: Unable to unwrap value ${decoded}`)
  }

  return {
    interaction,
    value,
    version: toVersion(mayVersion),
  }
}

const unwrapV2 = <T = InteractionV2Value>(text: string): UnwrappedRemark2<T | InteractionV2Value> => {
  const decoded = unwrapURI(decodeHex(text))

  if (!isRemark(decoded)) {
    throw new TypeError(`RMRK: Unable to unwrap object ${decoded}`)
  }
  const [_, mayInteraction, mayVersion, id, ...rest] = splitBySquare(decoded)

  const interaction = toInteractionV2(mayInteraction)

  const value = resolveRmrk2Value(interaction, id, rest)

  return {
    interaction,
    value,
    version: toVersion(mayVersion),
  }
}

export { unwrap as unwrapRemark, unwrapV2 as unwrapRemark2 }
