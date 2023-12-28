import type { DataHandlerContext, FieldSelection } from '@subsquid/substrate-processor'
import { Store as SquidStore } from '@subsquid/typeorm-store'

export type EntityWithId = {
  id: string;
}

export type BurnableEntity = EntityWithId & {
  burned: boolean;
}

// with tyoe buliders
export type WithCaller = {
  caller: string;
};

export type WithTimestamp = {
  timestamp: Date;
};

export type WithBlockNumber<T = string> = {
  blockNumber: T;
}

export type BaseBlock = WithTimestamp & WithBlockNumber;

// shared
export type BaseCall = BaseBlock & WithCaller;

export type IEvent<T> = WithCaller & WithTimestamp & WithBlockNumber<bigint> & {
  interaction: T;
  currentOwner: string,
  meta: string;
}

// typeorm
export type EntityConstructor<T> = {
  new (...args: any[]): T;
};

export type Store = SquidStore // & { em: () => EntityManager }
export type BatchContext<S = Store, F extends FieldSelection = FieldSelection> = DataHandlerContext<S, F>

// meta:
export type Optional<T> = T | undefined | null;
export type CallWith<T> = BaseCall & T

// subsquid
export type ArchiveCall<T = any> = {
  __kind: string,
  value: T
}

export type ItemKind = 'evmLog' | 'event' | 'transaction' | 'call'

export type ItemWithKind = {
  kind: ItemKind
}

export type ArchiveCallWithOptionalValue = ArchiveCall<Optional<any>>

// entity
export enum DisplayType {
  null,
  'boost_number',
  'number',
  'boost_percentage',
}

export type MetadataAttribute = {
  display_type?: DisplayType
  trait_type?: string
  value: number | string
};

export type TokenMetadata = {
  name?: string
  description: string
  external_url?: string
  image: string
  animation_url?: string
  attributes?: MetadataAttribute[]
  mediaUri?: string;
  type?: string;
  thumbnailUri?: string;
  banner?: string;
}
