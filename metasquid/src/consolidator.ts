import { BurnableEntity, EntityWithId } from './types'

export function real<T>(entity: T | undefined): boolean {
  return !!entity;
}

export function burned({ burned: isBurned }: BurnableEntity): boolean {
  return isBurned;
}

export function created(entity: EntityWithId): boolean {
  return Object.keys(entity).length === 1 && entity.id !== undefined;
}

export function remintable(entity: BurnableEntity): boolean {
  return burned(entity) || created(entity);
}

export function needTo<T>(callback: (arg: T) => boolean, entity: T, positive = true): void {
  if (positive ? !callback(entity) : callback(entity)) {
    throw new ReferenceError(`[PROBLEM] Entity needs ${positive ? '' : 'not'}to be ${callback.name}`);
  }
}

export function plsBe<T>(callback: (arg: T) => boolean, entity: T): void {
  return needTo(callback, entity, true);
}

export function plsNotBe<T>(callback: (arg: T) => boolean, entity: T): void {
  return needTo(callback, entity, false);
}
