import { AbstractCreatedNFT } from '../types'
import { InteractionV2 } from './constants'

export type InteractionV2Type = keyof typeof InteractionV2
export type InteractionV2MintType = Extract<InteractionV2Type, 'MINT' | 'CREATE'>
export type JustInteractionV2 = Exclude<InteractionV2Type, 'MINT' | 'CREATE'>

export type UnwrappedRemark2<T> = {
  interaction: InteractionV2Type
  value: T
  version: string
}

export type Base = {
  value: any
}

export type InteractionValue = {
  id: string
  value: string
}

export type Accept = {
  id: string
  entity_type: 'RES' | 'NFT'
  entity_id: string
}

export type Equip = Omit<InteractionValue, 'value'> & {
  baseslot: string
}

export type Equippable = InteractionValue & {
  slot: string
}

export type Lock = Omit<InteractionValue, 'value'>

export type Resadd = InteractionValue & {
  value: Record<string, string>
  replace: string
}

export type SetPriority = InteractionValue

export type SetProperty = InteractionValue & {
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

export type Send = Omit<InteractionValue, 'value'> & {
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

export type Burn = Omit<InteractionValue, 'value'>

export type InteractionV2Value =
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
      opType: InteractionV2Type
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

export type CreateInteractionProps =
  | { action: InteractionV2.ACCEPT; payload: Accept }
  | { action: InteractionV2.BASE; payload: Base }
  | { action: InteractionV2.EQUIP; payload: Equip }
  | { action: InteractionV2.EQUIPPABLE; payload: Equippable }
  | { action: InteractionV2.LOCK; payload: Lock }
  | { action: InteractionV2.RESADD; payload: Resadd }
  | { action: InteractionV2.SETPRIORITY; payload: SetPriority }
  | { action: InteractionV2.SETPROPERTY; payload: SetProperty }
  | { action: InteractionV2.THEMEADD; payload: ThemeAdd }
  | { action: InteractionV2.BUY; payload: BUY }
  | { action: InteractionV2.EMOTE; payload: Emote }
  | { action: InteractionV2.SEND; payload: Send }
  | { action: InteractionV2.LIST; payload: List }
  | { action: InteractionV2.CHANGEISSUER; payload: ChangeIssuer }
  | { action: InteractionV2.CREATE; payload: Create }
  | { action: InteractionV2.MINT; payload: Mint }
  | { action: InteractionV2.BURN; payload: Burn }

export type CreateNFTProps = {
  collectionId: string
  symbol: string
  transferable: number
  index: number
  metadata: string
}

export type CreateNFTFunc = (props: CreateNFTProps) => CreatedNFTV2

export type CreateCollectionProps = {
  issuer: string
  max: number
  metadata: string
  symbol: string
}

export type CreateCollectionFunc = (props: CreateCollectionProps) => CreatedCollectionV2
