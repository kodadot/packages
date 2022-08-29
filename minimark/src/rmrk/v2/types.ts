import { InteractionV2 } from "./constants";

export type InteractionV2Type = keyof typeof InteractionV2
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

export type Accept = InteractionValue & {
    entity_id: string;
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

export type AddTheme = InteractionValue & {
    name: string
}

export type BUY = InteractionValue & {
    value?: string
}

export type EMOTE = InteractionValue & {
    namespace: string
}

export type SEND = Omit<InteractionValue, 'value'> & {
    recipient: string
}

export type LIST = {
    id: string,
    price: string,
}

export type CHANGEISSUER = {
    id: string;
    newissuer: string;
}

export type CREATE = {
    value: Record<string, string>
}

export type MINT = {
    value: Record<string, string | number>,
    recipient?: string,
}

export type BURN = Omit<InteractionValue, 'value'>

export type InteractionV2Value = Accept | Base | Equip | Equippable | Lock | Resadd
    | SetPriority | SetProperty | AddTheme | undefined
    | BUY | EMOTE | SEND | LIST | CHANGEISSUER
    | CREATE | MINT | BURN

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