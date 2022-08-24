import { decodeHex } from '../../utils/hex'
import { unwrapURI } from '../../utils/unwrap'
import { isRemark, splitBySquare, toVersion } from "../helpers";
import { toInteractionV2, resolveRmrk2Value, } from "./helper";
import { UnwrappedRemark2, InteractionV2Value } from "./types";

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

export default unwrapV2