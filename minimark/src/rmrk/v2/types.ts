import { InteractionV2 } from "./constants";

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
    id: string,
    price: string,
}

export type ChangeIssuer = {
    id: string;
    newissuer: string;
}

export type Create = {
    value: CreatedCollectionV2
}

export type Mint = {
    value: CreatedNFTV2,
    recipient?: string,
}

export type Burn = Omit<InteractionValue, 'value'>

export type InteractionV2Value = Accept | Base | Equip | Equippable | Lock | Resadd
    | SetPriority | SetProperty | ThemeAdd | undefined
    | BUY | Emote | Send | List | ChangeIssuer
    | Create | Mint | Burn

export interface CreatedCollectionV2 {
    max: number
    issuer: string
    symbol: string
    id: string;
    metadata: string
    properties?: IProperties
}

// from https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/collection.md#properties-format
export type IProperties = Record<string, IAttribute>;

export interface IAttribute {
    _mutation?: {
        allowed: boolean;
        with?: {
            opType: InteractionV2Type;
            condition?: string;
        };
    };
    type: "array" | "object" | "int" | "float" | "boolean" | "datetime" | "string";
    value: any;
}

export interface CreatedNFTV2 {
    collection: string
    metadata: string
    sn: string
    transferable: number
    symbol: string
}

type Theme = string | Record<string, string>

type Themes = Record<string, Theme>

export interface OffChainPart {
    id: string
    metadata: string
}

export interface OnChainFixedPart {
    id: string
    src: string
    type: 'fixed'
    z: number
    thumb?: string
    metadata?: string
}

export interface OnChainSlotPart extends Omit<OnChainFixedPart, 'type'> {
    type: 'slot',
    equippable: string[]
}

type Part = OffChainPart | OnChainFixedPart | OnChainSlotPart

export interface CreatedBASE {
    symbol: string
    type?: string
    themes?: Themes
    parts: Part[]
    metadata?: string
}


export type CreateInteractionProps =
    | { action: InteractionV2.ACCEPT, payload: Accept }
    | { action: InteractionV2.BASE, payload: Base }
    | { action: InteractionV2.EQUIP, payload: Equip }
    | { action: InteractionV2.EQUIPPABLE, payload: Equippable }
    | { action: InteractionV2.LOCK, payload: Lock }
    | { action: InteractionV2.RESADD, payload: Resadd }
    | { action: InteractionV2.SETPRIORITY, payload: SetPriority }
    | { action: InteractionV2.SETPROPERTY, payload: SetProperty }
    | { action: InteractionV2.THEMEADD, payload: ThemeAdd }
    | { action: InteractionV2.BUY, payload: BUY }
    | { action: InteractionV2.EMOTE, payload: Emote }
    | { action: InteractionV2.SEND, payload: Send }
    | { action: InteractionV2.LIST, payload: List }
    | { action: InteractionV2.CHANGEISSUER, payload: ChangeIssuer }
    | { action: InteractionV2.CREATE, payload: Create }
    | { action: InteractionV2.MINT, payload: Mint }
    | { action: InteractionV2.BURN, payload: Burn }