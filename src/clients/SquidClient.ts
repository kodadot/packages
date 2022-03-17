
import build from '../queryBuilder'
import { GraphQuery, KeyOf, ObjProp, SquidCollection, SquidNFT } from '../types'

import AbstractClient from './abstractClient'
import { getFields } from './defaults'

class SquidClient implements AbstractClient<SquidCollection, SquidNFT> {
  nftById (id: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build('nft: nftEntityById', toQuery, { id: { type: 'ID', required: true, value: id, name: 'id' } })
  }

  nftListByOwner (owner: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {currentOwner_eq: ${owner}})`, toQuery)
  }

  nftListByIssuer (issuer: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {issuer_eq: ${issuer}})`, toQuery)
  }

  nftListCollectedBy (address: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nFTEntities(where: {currentOwner_eq: ${address}, issuer_not_eq: ${address}})`, toQuery)
  }

  nftListByCollectionId (collectionId: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {collection: {id_eq: ${collectionId}}})`, toQuery)
  }

  nftListBy (id: string, field: KeyOf<SquidNFT>, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {${field}_eq: ${id}})`, toQuery)
  }

  collectionById (id: string, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build('collection: collectionEntityById', toQuery, { id: { type: 'ID', required: true, value: id, name: 'id' } })
  }

  collectionListByOwner (owner: string, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`collections: collectionEntities(where: {currentOwner_eq: ${owner}})`, toQuery)
  }

  collectionListByIssuer (issuer: string, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`collections: collectionEntities(where: {issuer_eq: ${issuer}})`, toQuery)
  }

  collectionListBy (id: string, field: KeyOf<SquidCollection>, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`collections: collectionEntities(where: {${field}_eq: ${id}})`, toQuery)
  }
}

export default SquidClient
