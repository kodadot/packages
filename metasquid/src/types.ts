import type { EntityManager } from 'typeorm'

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

// shared
export type BaseCall = WithCaller & WithTimestamp & WithBlockNumber;

export type IEvent<T> = WithCaller & WithTimestamp & WithBlockNumber<bigint> & {
  interaction: T;
  currentOwner: string,
  meta: string;
}

// typeorm
export type EntityConstructor<T> = {
  new (...args: any[]): T;
};

export type Store = EntityManager
// export type BaseContext = CommonHandlerContext<Store>;

// meta:
export type Optional<T> = T | null;
export type CallWith<T> = BaseCall & T;

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
}
