import { AbstractCreatedCollection, AbstractCreatedNFT, BinaryBoolean, UnwrappedRemark as AbstractRemarkWrapper } from '../shared/types'
import { Interaction } from './enums'

export type JustInteraction = Exclude<Interaction, Interaction.MINT | Interaction.MINTNFT | Interaction.UNLIST>
export type OnlyMintInteraction = Interaction.MINT | Interaction.MINTNFT

export type UnwrappedRemark<T> = AbstractRemarkWrapper<T, Interaction>

export type InteractionValue = {
  id: string
  value?: string
}

export type CreatedCollection = AbstractCreatedCollection

export type CreatedNFT = AbstractCreatedNFT & {
  instance: string
  name: string
  currentOwner: string
  transferable: BinaryBoolean
}

export type CreatedCollectionWithNFT<C = CreatedCollection, N = CreatedNFT[]> = {
  collection: C
  nfts: N
}
