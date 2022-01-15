export enum Interaction {
  MINT = 'MINT',
  MINTNFT = 'MINTNFT',
  LIST = 'LIST',
  BUY = 'BUY',
  SEND = 'SEND',
  CONSUME = 'CONSUME',
  CHANGEISSUER = 'CHANGEISSUER',
  EMOTE = 'EMOTE',
}

export type JustInteraction =  Exclude<Interaction, Interaction.MINT | Interaction.MINTNFT>


export type UnwrappedRemark<T> = {
  interaction: Interaction,
  value: T,
  version: string,
}

export type InteractionValue = {
  id: string,
  value?: string,
}