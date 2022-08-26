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

export type InteractionV2Value = Base | Equip | Equippable | Lock | Resadd 
    | SetPriority | SetProperty | AddTheme | undefined
    | BUY | EMOTE | SEND | LIST | CHANGEISSUER
    | CREATE | MINT | BURN