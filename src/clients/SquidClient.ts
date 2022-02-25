
import build from '../queryBuilder'
import { GraphQuery, ObjProp, SquidCollection, SquidNFT } from '../types'

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

  nftListByIssuer(issuer: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {issuer_eq: ${issuer}})`, toQuery)
  }

  nftListByCollectionId (collectionId: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`nfts: nftEntities(where: {collection: {id_eq: ${collectionId}}})`, toQuery)
  }

  collectionById (id: string, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build('collection: collectionEntityById', toQuery, { id: { type: 'ID', required: true, value: id, name: 'id' } })
  }

  collectionListByOwner (owner: string, fields?: ObjProp<SquidCollection>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`collections: collectionEntities(where: {currentOwner_eq: ${owner}})`, toQuery)
  }

  collectionListByIssuer(issuer: string, fields?: ObjProp<SquidNFT>): GraphQuery {
    const toQuery = getFields(fields)
    return build(`collections: collectionEntities(where: {issuer_eq: ${issuer}})`, toQuery)
  }
}

export default SquidClient
