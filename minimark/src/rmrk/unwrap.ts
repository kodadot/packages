import { decodeHex, unwrapURI } from '../utils'
import { RMRK_V0, RMRK_V1, RMRK_V2, isRemark, splitBySquare, toVersion } from './shared'

import { InteractionValue, UnwrappedRemark as UnwrapV1, unwrapRemark } from './v1'
import { UnwrappedRemark2 as UnwrapV2, unwrapRemarkV2 } from './v2'

const unwrap = <T = InteractionValue>(text: string): UnwrapV1<T> | UnwrapV2<T> => {
  const decoded = unwrapURI(decodeHex(text))

  if (!isRemark(decoded)) {
    throw new TypeError(`RMRK: Unable to unwrap object ${decoded}`)
  }

  // DEV: skipping prefix intetionally
  const [, , mayVersion] = splitBySquare(decoded)

  const version = toVersion(mayVersion)

  if ([RMRK_V0, RMRK_V1].includes(version)) {
    return unwrapRemark(text) as UnwrapV1<T>
  }

  if (version === RMRK_V2) {
    return unwrapRemarkV2(text) as UnwrapV2<T>
  }

  throw new TypeError(`RMRK: Unable to unwrap version ${version}`)
}

export { unwrap as unwrapRemark }
