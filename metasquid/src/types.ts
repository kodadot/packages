export type EntityWithId = {
  id: string;
}

export type BurnableEntity = EntityWithId & {
  burned: boolean;
}
