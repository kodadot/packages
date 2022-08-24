export enum InteractionV2 {
    ACCEPT = 'ACCEPT',
    BASE = 'BASE',
    EQUIP = 'EQUIP',
    EQUIPPABLE = 'EQUIPPABLE',
    LOCK = 'LOCK',
    RESADD = 'RESADD',
    SETPROPERTY = 'SETPROPERTY',
    SETPRIORITY = 'SETPRIORITY',
    THEMEADD = 'THEMEADD',
}

export type UnwrappedRemark2<T> = {
    interaction: InteractionV2
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

export type InteractionV2Value = Base | Equip | Equippable | Lock | Resadd | SetPriority | SetProperty | AddTheme | undefined