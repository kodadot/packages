import { decodeHex } from '../utils/hex'
import { unwrapURI } from '../utils/unwrap'
import { isRemark, splitBySquare, toVersion } from './shared/helpers'
import { RMRK_V0, RMRK_V1, RMRK_V2 } from './shared/constants'

import { InteractionV2, InteractionValue, UnwrappedRemark } from './types'
import { unwrapRemark } from './v1/unwrap'
import { InteractionV2Value, unwrapRemarkV2 } from './v2'

type V1 = InteractionValue
type V2 = InteractionV2 | InteractionV2Value

const unwrap = <T = InteractionValue>(text: string): UnwrappedRemark<T | V1 | V2 > => {
  const decoded = unwrapURI(decodeHex(text))

  if (!isRemark(decoded)) {
    throw new TypeError(`RMRK: Unable to unwrap object ${decoded}`)
  }

  // DEV: skipping prefix intetionally
  const [, , mayVersion] = splitBySquare(decoded)

  const version = toVersion(mayVersion)

  if ([RMRK_V0, RMRK_V1].includes(version)) {
    return unwrapRemark(text)
  }

  if (version === RMRK_V2) {
    return unwrapRemarkV2(text) as UnwrappedRemark<T | V1 | V2>
  }

  throw new TypeError(`RMRK: Unable to unwrap version ${version}`)
}

export { unwrap as unwrapRemark }
