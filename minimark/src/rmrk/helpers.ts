import { unwrapJSON, unwrapURI } from '../utils/unwrap'
import { RMRK, SQUARE } from './constants'
import { Interaction, InteractionValue, InteractionV2, InteractionV2Value } from './types'

export const isRemark = (text: string): boolean => {
  return RMRK.test(text)
}

export const splitBySquare = (text: string): string[] => text.split(SQUARE)

export const isValidInteraction = (interaction: string, throwable = true): boolean => {
  const availableInteractions: string[] = [...Object.values(Interaction), ...Object.values(InteractionV2)]
  const value = availableInteractions.includes(interaction)
  if (!value && throwable) {
    throw new TypeError(`RMRK: Invalid interaction ${interaction}`)
  }
  return value
}

export const toInteraction = (interaction: string): Interaction => {
  isValidInteraction(interaction)
  return interaction as Interaction
}

export const toInteractionV2 = (interaction: string): InteractionV2 => {
  isValidInteraction(interaction)
  return interaction as InteractionV2
}

export const isCreateInteraction = (interaction: Interaction): boolean => {
  return interaction === Interaction.MINT || interaction === Interaction.MINTNFT
}

// Some KodaDot Remarks are not valid Remarks, but are valid KodaDot Remarks. // made by Copilot
export const toVersion = (version?: string): string => {
  if (!version) {
    return '1.0.0'
  }
  return version
}

export const resolveValue = <T>(interaction: Interaction, mayIdOrValue: string, mayValue?: string): T | InteractionValue => {
  if (isCreateInteraction(interaction)) {
    const value = unwrapJSON<T>(mayIdOrValue)
    if (!value) {
      throw new TypeError(`RMRK: Unable to unwrap value ${mayIdOrValue}`)
    }
    return value
  }

  if (!mayIdOrValue) {
    throw new TypeError(`RMRK: Unable to ${interaction} unwrap value ${mayIdOrValue}`)
  }

  return {
    id: mayIdOrValue,
    value: mayValue,
  }
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
  }

  return
}
