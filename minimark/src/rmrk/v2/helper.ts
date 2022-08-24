import { unwrapJSON, unwrapURI } from "../../utils";
import { isValidInteraction } from "../helpers";

import { InteractionV2, InteractionV2Value } from "./types";
export const toInteractionV2 = (interaction: string): InteractionV2 => {
    isValidInteraction(interaction)
    return interaction as InteractionV2
}

export const resolveRmrk2Value = (interaction: InteractionV2, id: string, restValues: string[]): InteractionV2Value => {
  switch (interaction) {
    case InteractionV2.BASE:
      return {
        value: unwrapJSON(id),
      }
    case InteractionV2.ACCEPT:
      return {
        id: id,
        value: restValues[0],
      }
    case InteractionV2.EQUIP:
      return {
        id,
        value: restValues[0],
      }
    case InteractionV2.EQUIPPABLE:
      return {
        id,
        slot: restValues[0],
        value: restValues[1],
      }
    case InteractionV2.LOCK:
      return {
        id,
        value: undefined
      }
    case InteractionV2.RESADD:
      return {
        id,
        value: unwrapJSON(restValues[0]),
        replace: restValues[1],
      }
    case InteractionV2.SETPRIORITY:
      return {
        id,
        value: unwrapURI(restValues[0]),
      }
    case InteractionV2.SETPROPERTY:
      return {
        id,
        name: unwrapURI(restValues[0]),
        value: unwrapURI(restValues[1]),
      }
    case InteractionV2.THEMEADD:
      return {
        id,
        name: restValues[0],
        value: unwrapJSON(restValues[1]),
      }
    case InteractionV2.BUY:
      const [ value ] = restValues
      return {
        id,
        value,
      }
  }

  return
}