
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types'
import type { RegistryTypes } from '@polkadot/types-codec/types'

export type ApiExtensionMap = Record<string, ApiExtension>
export type ApiExtension = { types?: RegistryTypes }
export type ExtrinsicFunction<T> = (arg: T) => Extrinsic

export type Extrinsic = SubmittableExtrinsic<'promise'>
