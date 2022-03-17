
import build from '../queryBuilder'
import { GraphQuery, ObjProp, BaseCollection, BaseNFT } from '../types'

import AbstractClient from './abstractClient'
import { getFields, wrapSubqueryList } from './defaults'

class SubqueryClient implements AbstractClient<BaseCollection, BaseNFT> {
  nftById (id: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build('nft: nFTEntity', toQuery, { id: { type: 'String', required: true, value: id, name: 'id' } })
  }

  nftListByOwner (owner: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { currentOwner: { equalTo: ${owner} } })`, toQuery)
  }

  nftListByIssuer (issuer: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { equalTo: ${issuer} } })`, toQuery)
  }

  nftListCollectedBy (address: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { notEqualTo: ${address} } currentOwner: { equalTo: ${address} } burned: { distinctFrom: true } })`, toQuery)
  }

  nftListSoldBy (address: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { equalTo: ${address} } currentOwner: { notEqualTo: ${address} } burned: { distinctFrom: true } })`, toQuery)
  }

  nftListByCollectionId (collectionId: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { collectionId: { equalTo: ${collectionId} } })`, toQuery)
  }

  collectionById (id: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build('collection: collectionEntity', toQuery, { id: { type: 'String', required: true, value: id, name: 'id' } })
  }

  collectionListByOwner (owner: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`collections: collectionEntities(filter: { currentOwner: { equalTo: ${owner} } })`, toQuery)
  }

  collectionListByIssuer (issuer: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`collections: collectionEntities(filter: { issuer: { equalTo: ${issuer} } })`, toQuery)
  }
}

export default SubqueryClient
