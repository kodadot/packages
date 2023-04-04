import { unwrapJSON } from '../../utils/unwrap'
import { Interaction } from '../v1/enums'
import { InteractionValue } from '../v1/types'
import { Interaction as InteractionV2 } from '../v2/enums'
import { RMRK, RMRK_PLUS, SQUARE } from './constants'
import { VersionedRemark } from './types'

export const isRemark = (text: string): boolean => {
  return RMRK.test(text)
}

export const isRemarkVersion = (text: string): VersionedRemark | undefined => {
  return text.match(RMRK_PLUS)?.at(1) as VersionedRemark | undefined
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

export const isCreateInteraction = (interaction: Interaction): boolean => {
  return interaction === Interaction.MINT || interaction === Interaction.MINTNFT
}

// Some KodaDot Remarks are not valid Remarks, but are valid KodaDot Remarks. // made by Copilot
export const toVersion = (version?: string): VersionedRemark => {
  if (!version) {
    return '1.0.0'
  }
  return version as VersionedRemark
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
    value: mayValue
  }
}
