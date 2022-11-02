import { $URL, withoutLeadingSlash } from 'ufo'
import getClient from '../clients/factory'
import { GraphQuery } from '../types'
import { getUrl } from './indexers'
import { ClientCall, GraphRequest, Prefix } from './types'
import validate from './validation'

const pathMap: Record<string, ClientCall> = {
  nft: 'nftById',
  collection: 'collectionById',
  nftByOwner: 'nftListByOwner',
  nftByIssuer: 'nftListByIssuer',
  nftListCollectedBy: 'nftListCollectedBy',
  nftListSoldBy: 'nftListSoldBy',
  nftByCollection: 'nftListByCollectionId',
  nftForSale: 'nftListForSale',
  collectionByOwner: 'collectionListByOwner',
  collectionByIssuer: 'collectionListByIssuer'
}

export const parsePath = (pathname: string): string[] => {
  return withoutLeadingSlash(pathname).split('/')
}

const hasCall = (call: string | undefined): boolean => call in pathMap
const supportChain = (chain: string | undefined): boolean => {
  const uri = getUrl((chain as Prefix) || '')
  return !!uri
}

const urlOf = (path: string): $URL => new $URL(path)
const makeQuery = (call: string, id: string): GraphQuery => {
  const client = getClient()
  const fn: ((id: string) => GraphQuery) | undefined = client[call]
  if (fn === undefined || !(typeof fn === 'function')) {
    throw new ReferenceError(`[UNIQUERY::REST] Unable to make call: ${call}`)
  }

  return fn(id)
}

// /bsx/nft/:id
// TODO: should return GraphRequest
export function pathToRequest(path: string): GraphRequest {
  const { query, pathname } = urlOf(path)
  const [chain, call, id] = parsePath(pathname)
  validate(chain, call, id)
  console.log(query)
  if (!hasCall(call) || !supportChain(chain)) {
    throw new ReferenceError(`[UNIQUERY::REST] Invalid path: ${path}`)
  }

  const baseURL = getUrl(chain as Prefix)
  const graphQuery = makeQuery(call, id)

  return { baseURL, query: graphQuery, path }
  // const [chain, call, param] = path.split('/').filter(Boolean)
}
