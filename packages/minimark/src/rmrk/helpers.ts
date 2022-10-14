import { unwrapJSON } from '../utils/unwrap'
import { RMRK, SQUARE } from './constants'
import { Interaction, InteractionValue } from './types'

export const isRemark = (text: string): boolean => {
  return RMRK.test(text)
}

export const splitBySquare = (text: string): string[] => text.split(SQUARE)

export const isValidInteraction = (interaction: string, throwable = true): boolean => {
  const value = (Object.values(Interaction) as string[]).includes(interaction)
  if (!value && throwable) {
    throw new TypeError(`RMRK: Invalid interaction ${interaction}`)
  }
  return value
}

export const toInteraction = (interaction: string): Interaction => {
  isValidInteraction(interaction)
  return interaction as Interaction
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
