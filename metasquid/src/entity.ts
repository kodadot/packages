import {
  FindOneOptions,
  FindOptionsRelations,
  FindOptionsWhere,
  In,
  Repository
} from 'typeorm'
import { toEntity, toMap } from './shared'
import { EntityConstructor, Store } from './types'

export type EntityWithId = {
  id: string
}

export async function createOrElseThrow<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  init: Partial<T>
): Promise<T> {
  const entity = await getOptional(store, entityConstructor, id)
  if (entity) {
    throw new Error(`Entity with id ${id} already exists`)
  }

  return create(entityConstructor, id, init)
}

/**
 * Get or Create the provided entity with the given ID
 *
 * Note: you need to persist/save the entity yourself
 */
export async function getOrCreate<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  init: Partial<T>
): Promise<T> {
  // attempt to get the entity from the database
  let entity = await getOptional(store, entityConstructor, id)

  // if the entity does not exist, construct a new one
  // and assign the provided ID to it
  if (entity == null) {
    entity = new entityConstructor()
    entity.id = id
    Object.assign(entity, init)
  }

  return entity
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _get<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  optional?: boolean
): Promise<T | null> {
  const where: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>
  const callback = optional ? store.findOneBy : store.findOneByOrFail
  return callback<T>(entityConstructor, where)
}

export function get<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string
): Promise<T | null> {
  return getOptional(store, entityConstructor, id)
}

export function getOptional<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string
): Promise<T | null> {
  const where: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>
  return store.findOneBy<T>(entityConstructor, where)
}

export function getOrFail<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string
): Promise<T> {
  const where: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>
  return store.findOneByOrFail<T>(entityConstructor, where)
}

export function getWhere<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  where: FindOptionsWhere<T>
): Promise<T> {
  const options: FindOptionsWhere<T> = { id, ...where }
  return store.findOneByOrFail<T>(entityConstructor, options)
}

export function create<T extends EntityWithId>(
  entityConstructor: EntityConstructor<T>,
  id: string,
  init: Partial<T>
) {
  const entity = new entityConstructor()
  entity.id = id
  Object.assign(entity, init)
  return entity
}

function findOne<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  options?: FindOneOptions<T>
): Promise<T | null> {
  const where: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>
  return store.findOne<T>(entityConstructor, { ...options, where })
}

export function findOneWithJoin<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  id: string,
  relations?: FindOptionsRelations<T>
): Promise<T | null> {
  return findOne(store, entityConstructor, id, { relations })
}

export function findByIdList<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  idList: Iterable<string>
): Promise<T[]> {
  const where: FindOptionsWhere<T> = {
    id: In([...idList])
  } as FindOptionsWhere<T>
  return store.findBy<T>(entityConstructor, where)
}

export function findByIdListAsMap<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  idList: Iterable<string>
): Promise<Map<string, T>> {
  return findByIdList(store, entityConstructor, idList).then(toMap)
}

export function findByRawQuery<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  query: string,
  args?: any[]
): Promise<T[]> {
  const repository = store.getRepository(entityConstructor)
  return genericRepositoryQuery<T, T[]>(repository, query, args)
    .then(res => res.map(el => toEntity(entityConstructor, el)))
}

export function has<T extends EntityWithId>(
  store: Store,
  entityConstructor: EntityConstructor<T>,
  idOrOptions: string | FindOptionsWhere<T>
): Promise<boolean> {
  const where: FindOptionsWhere<T> = typeof idOrOptions === 'string' ? { id: idOrOptions } as FindOptionsWhere<T> : idOrOptions
  return store.exists(entityConstructor, { where })
}

export function genericRepositoryQuery<T extends EntityWithId, V>(
  repository: Repository<T>,
  query: string,
  args?: any[]
): Promise<V> {
  return repository.query(query, args) as Promise<V>
}
