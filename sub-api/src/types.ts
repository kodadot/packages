
import type { RegistryTypes } from '@polkadot/types-codec/types'

export type ApiExtensionMap = Record<string, ApiExtension>
export type ApiExtension = { types?: RegistryTypes }
