
import { ObjProp, GraphQuery, QueryOptions } from '../types'
// Collection, Token
interface AbstractClient<C, T> {
  nftById(id: string, fields?: ObjProp<T>): GraphQuery
  nftListByOwner(owner: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByIssuer(issuer: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListCollectedBy(address: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListSoldBy(address: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListByCollectionId(collectionId: string, fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  nftListForSale(fields?: ObjProp<T>, options?: QueryOptions): GraphQuery
  collectionById(id: string, fields?: ObjProp<C>): GraphQuery
  collectionListByOwner(owner: string, fields?: ObjProp<C>, options?: QueryOptions): GraphQuery
  collectionListByIssuer(issuer: string, fields?: ObjProp<C>, options?: QueryOptions): GraphQuery
  // collectionListBy(id: string, field: KeyOf<C>, fields?: ObjProp<C>): GraphQuery
  // nftListBy(id: string, field: KeyOf<T>, fields?: ObjProp<T>): GraphQuery
}

export default AbstractClient
