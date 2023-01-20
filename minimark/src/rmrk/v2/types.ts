/* eslint-disable no-use-before-define */
import { AbstractCreatedCollection, AbstractCreatedNFT, UnwrappedRemark as AbstractRemarkWrapper } from '../shared/types'
import { Interaction } from './enums'

export type OnlyMintInteraction = Interaction.CREATE | Interaction.MINT
export type JustInteraction = Exclude<Interaction, OnlyMintInteraction | Interaction.UNLIST>

export type InteractionUnion = keyof typeof Interaction
// type AvailableAction = Exclude<InteractionUnion, Interaction.UNLIST>


export type UnwrappedRemark<T> = AbstractRemarkWrapper<T, Interaction>

export type CreatedCollection = AbstractCreatedCollection

export type Base = {
  value: any
}

export type WithId = {
  id: string
}

// more fancy
// export type WithValue<T extends boolean = true> = {
//   value: T extends true ? string : undefined
// }

export type WithValue = {
  value: string
}

export type BasicInteraction = WithId & WithValue

export type Accept = {
  id: string
  entity_type: 'RES' | 'NFT'
  entity_id: string
}

export type Equip = WithId & {
  baseslot: string
}

export type Equippable = BasicInteraction & {
  slot: string
}

export type Lock = WithId

export type Resadd = BasicInteraction & {
  value: Record<string, string>
  replace: string
}

export type SetPriority = BasicInteraction

export type SetProperty = BasicInteraction & {
  name: string
}

export type ThemeAdd = {
  base_id: string
  name: string
  value: Record<string, string>
}

export type BUY = {
  id: string
  recipient?: string
}

export type Emote = {
  id: string
  emotion: string
  namespace: string
}

export type Send = WithId & {
  recipient: string
}

export type List = {
  id: string
  price: string
}

export type ChangeIssuer = {
  id: string
  newissuer: string
}

export type Create = {
  value: CreatedCollectionV2
}

export type Mint = {
  value: CreatedNFTV2
  recipient?: string
}

export type Burn = WithId

export type InteractionValue =
  | Accept
  | Base
  | Equip
  | Equippable
  | Lock
  | Resadd
  | SetPriority
  | SetProperty
  | ThemeAdd
  | undefined
  | BUY
  | Emote
  | Send
  | List
  | ChangeIssuer
  | Create
  | Mint
  | Burn

export interface CreatedCollectionV2 {
  max: number
  issuer: string
  symbol: string
  id: string
  metadata: string
  properties?: IProperties
}

// from https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/collection.md#properties-format
export type IProperties = Record<string, IAttribute>

export interface IAttribute {
  _mutation?: {
    allowed: boolean
    with?: {
      opType: Interaction
      condition?: string
    }
  }
  type: 'array' | 'object' | 'int' | 'float' | 'boolean' | 'datetime' | 'string'
  value: any
}

export interface CreatedNFTV2 {
  collection: string
  metadata: string
  sn: string
  transferable: number
  symbol: string
}

export type CreatedNFT = AbstractCreatedNFT & {
  name?: string
  symbol: string
  transferable: number
}

type Theme = string | Record<string, string>

type Themes = Record<string, Theme>

export interface BasicPart {
  id: string
  metadata: string
}

export type PartType = 'slot' | 'fixed'

// https://github.com/rmrk-team/rmrk-tools/blob/b3fe70f59db383d3b4d158bb0b4c3c88aaaf6158/src/rmrk2.0.0/classes/base.ts#L170
export interface AbstractBasePart {
  id: string
  src: string
  type: PartType
  z?: number
  thumb?: string
  metadata?: string
}

export interface FixedPart extends AbstractBasePart {
  type: 'fixed'
}

export interface SlotPart extends AbstractBasePart {
  type: 'slot'
  equippable: string[] | '*'
}

type BasePart = FixedPart | SlotPart

// type Resource = Basic | Base

export type CreateInteractionFunc = (props: CreateInteractionProps) => string

// From RMRK:TOOLS
// https://github.com/rmrk-team/rmrk-tools/blob/master/src/rmrk2.0.0/tools/types.ts
export type BaseType = 'svg' | 'png' | 'audio' | 'video' | 'mixed' | string;

export interface CreatedBase {
  symbol: string
  type?: BaseType
  themes?: Themes
  parts: BasePart[]
  metadata?: string
}

// usage // | ActionWithPayload<'CREATE', Create>
// type ActionWithPayload<T extends AvailableAction, P> = { action: T; payload: P }

export type CreateInteractionProps =
  | { action: Interaction.ACCEPT; payload: Accept }
  | { action: Interaction.BASE; payload: Base }
  | { action: Interaction.EQUIP; payload: Equip }
  | { action: Interaction.EQUIPPABLE; payload: Equippable }
  | { action: Interaction.LOCK; payload: Lock }
  | { action: Interaction.RESADD; payload: Resadd }
  | { action: Interaction.SETPRIORITY; payload: SetPriority }
  | { action: Interaction.SETPROPERTY; payload: SetProperty }
  | { action: Interaction.THEMEADD; payload: ThemeAdd }
  | { action: Interaction.BUY; payload: BUY }
  | { action: Interaction.EMOTE; payload: Emote }
  | { action: Interaction.SEND; payload: Send }
  | { action: Interaction.LIST; payload: List }
  | { action: Interaction.CHANGEISSUER; payload: ChangeIssuer }
  | { action: Interaction.CREATE; payload: Create }
  | { action: Interaction.MINT; payload: Mint }
  | { action: Interaction.BURN; payload: Burn }

export type UnwrapValue = {
  [Interaction.ACCEPT]: Accept,
  [Interaction.BASE]: Base,
  [Interaction.EQUIP]: Equip,
  [Interaction.EQUIPPABLE]: Equippable,
  [Interaction.LOCK]: Lock,
  [Interaction.RESADD]: Resadd,
  [Interaction.SETPRIORITY]: SetPriority,
  [Interaction.SETPROPERTY]: SetProperty,
  [Interaction.THEMEADD]: ThemeAdd,
  [Interaction.BUY]: BUY,
  [Interaction.EMOTE]: Emote,
  [Interaction.SEND]: Send,
  [Interaction.LIST]: List,
  [Interaction.CHANGEISSUER]: ChangeIssuer,
  [Interaction.CREATE]: Create,
  [Interaction.MINT]: Mint,
  [Interaction.BURN]: Burn,
  'NONE': BasicInteraction
}

export type CreateNFTProps = {
  collectionId: string
  symbol: string
  transferable: number
  index: number
  metadata: string
}

// function fn<T extends keyof UnwrapValue = 'NONE'>(value: Record<any, any>): UnwrapValue[T] {
//   return value as UnwrapValue[T]
// }

export type CreateNFTFunc = (props: CreateNFTProps) => CreatedNFTV2

export type CreateCollectionProps = {
  issuer: string
  max: number
  metadata: string
  symbol: string
}

export type CreateCollectionFunc = (props: CreateCollectionProps) => CreatedCollectionV2
