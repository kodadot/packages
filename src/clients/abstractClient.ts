
import { ObjProp, GraphQuery } from '../types'
// Collection, Token
interface AbstractClient<C, T> {
  nftById(id: string, fields?: ObjProp<T>): GraphQuery
  nftListByOwner(owner: string, fields?: ObjProp<T>): GraphQuery
  nftListByIssuer(issuer: string, fields?: ObjProp<T>): GraphQuery
  nftListByCollectionId(collectionId: string, fields?: ObjProp<T>): GraphQuery
  collectionById(id: string, fields?: ObjProp<C>): GraphQuery
  collectionListByOwner(owner: string, fields?: ObjProp<C>): GraphQuery
  collectionListByIssuer(issuer: string, fields?: ObjProp<T>): GraphQuery
}

export default AbstractClient
