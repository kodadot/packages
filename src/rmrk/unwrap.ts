import { decodeHex } from '../utils/hex'
import { unwrapURI } from '../utils/unwrap'
import { isRemark, resolveValue, splitBySquare, toInteraction, toVersion } from './helpers'
import { InteractionValue, UnwrappedRemark } from './types'

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

export default unwrap
