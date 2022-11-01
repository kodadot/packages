/* eslint-disable @typescript-eslint/no-unused-vars */

import build from '../queryBuilder'
import { GraphQuery, ObjProp, BaseCollection, BaseNFT, QueryOptions, BaseEvent } from '../types'

import AbstractClient from './abstractClient'
import { getFields, optionToQuery, wrapSubqueryList } from './defaults'

class SubqueryClient implements AbstractClient<BaseCollection, BaseNFT> {
  nftById(id: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build('nft: nFTEntity', toQuery, { id: { type: 'String', required: true, value: id, name: 'id' } })
  }

  nftListByOwner(owner: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { currentOwner: { equalTo: ${owner} } })`, toQuery)
  }

  nftListByIssuer(issuer: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { equalTo: ${issuer} } })`, toQuery)
  }

  nftListCollectedBy(address: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { notEqualTo: ${address} } currentOwner: { equalTo: ${address} } burned: { distinctFrom: true } })`, toQuery)
  }

  nftListSoldBy(address: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { issuer: { equalTo: ${address} } currentOwner: { notEqualTo: ${address} } burned: { distinctFrom: true } })`, toQuery)
  }

  nftListForSale(fields?: ObjProp<BaseNFT>, options?: QueryOptions): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    const optionList = optionToQuery(options, true)
    return build(`nfts: nFTEntities(filter: { price: { greaterThan: "0" } } ) ${optionList}`, toQuery)
  }

  nftListByCollectionId(collectionId: string, fields?: ObjProp<BaseNFT>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`nfts: nFTEntities(filter: { collectionId: { equalTo: ${collectionId} } })`, toQuery)
  }

  collectionById(id: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build('collection: collectionEntity', toQuery, { id: { type: 'String', required: true, value: id, name: 'id' } })
  }

  collectionListByOwner(owner: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`collections: collectionEntities(filter: { currentOwner: { equalTo: ${owner} } })`, toQuery)
  }

  collectionListByIssuer(issuer: string, fields?: ObjProp<BaseCollection>): GraphQuery {
    const toQuery = wrapSubqueryList(getFields(fields))
    return build(`collections: collectionEntities(filter: { issuer: { equalTo: ${issuer} } })`, toQuery)
  }

  eventListByAddress(address: string, fields?: ObjProp<BaseEvent>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  eventListByCollectionId(id: string, fields?: ObjProp<BaseEvent>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  eventListByCollectionIdAndInteraction(id: string, interaction: string, fields?: ObjProp<BaseEvent>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  eventListByInteraction(interaction: string, fields?: ObjProp<BaseEvent>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  eventListByNftId(id: string, fields?: ObjProp<BaseEvent>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  nftListByCollectionIdAndOwner(id: string, owner: string, fields?: ObjProp<BaseNFT>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  nftListByCollectionIdList(ids: string[], fields?: ObjProp<BaseNFT>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }

  nftListByMetadataId(id: string, fields?: ObjProp<BaseNFT>, options?: QueryOptions): GraphQuery {
    throw new Error('Method not implemented.')
  }
}

export default SubqueryClient
