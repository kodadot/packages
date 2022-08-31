export type EntityWithId = {
  id: string;
}

export type BurnableEntity = EntityWithId & {
  burned: boolean;
}

// shared
export type BaseCall = {
  caller: string;
  blockNumber: string;
  timestamp: Date;
};

export type IEvent<T> = BaseCall & {
  interaction: T;
  blockNumber: bigint,
  currentOwner: string,
  meta: string;
}

// typeorm
export type EntityConstructor<T> = {
  new (...args: any[]): T;
};


// meta:
export type Optional<T> = T | null;
export type CallWith<T> = BaseCall & T;


// entity
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

export type MetadataAttribute = {
  display_type?: DisplayType
  trait_type?: string
  value: number | string
};

export enum DisplayType {
  null,
  'boost_number',
  'number',
  'boost_percentage',
}
