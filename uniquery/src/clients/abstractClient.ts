
import { ObjProp, GraphQuery, QueryOptions, BaseEvent } from '../types'
// Collection, Token
interface AbstractClient<C, T, E = BaseEvent> {
  collectionById(id: string, fields?: ObjProp<C>): GraphQuery
  collectionListByIssuer(issuer: string, fields?: ObjProp<C>, options?: QueryOptions): GraphQuery
  collectionListByOwner(owner: string, fields?: ObjProp<C>, options?: QueryOptions): GraphQuery
  eventListByAddress(address: string, fields?: ObjProp<E>, options?: QueryOptions): GraphQuery
  eventListByCollectionId(id: string, fields?: ObjProp<E>, options?: QueryOptions): GraphQuery
  eventListByCollectionIdAndInteraction(id: string, interaction: string, fields?: ObjProp<E>, options?: QueryOptions): GraphQuery
  eventListByInteraction(interaction: string, fields?: ObjProp<E>, options?: QueryOptions): GraphQuery
  eventListByNftId(id: string, fields?: ObjProp<E>, options?: QueryOptions): GraphQuery
  nftById(id: string, fields?: ObjProp<T>): GraphQuery
  nftListByCollectionId(collectionId: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByCollectionIdAndOwner(id: string, owner: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByCollectionIdList(ids: string[], fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByIssuer(issuer: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByMetadataId(id: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByOwner(owner: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListCollectedBy(address: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListForSale(fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListSoldBy(address: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  // collectionListBy(id: string, field: KeyOf<C>, fields?: ObjProp<C>): GraphQuery
  // nftListBy(id: string, field: KeyOf<T>, fields?: ObjProp<T>): GraphQuery
  // collectionStatListById(id: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  // lastNftIdbyCollectionId(id: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
}

export default AbstractClient
