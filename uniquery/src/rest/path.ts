// bsx/nft/:id
import { $URL, withoutLeadingSlash } from 'ufo'
import { ClientCall } from './types'

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
  // getUrl(chain)
  console.log(chain)
  return true
}

const urlOf = (path: string): $URL => new $URL(path)

// /bsx/nft/:id
// TODO: should return GraphRequest
export const toCall = (path: string) => {
  const { query, pathname } = urlOf(path)
  const [chain, call, id] = parsePath(pathname)
  console.log(query, call, id)
  if (!hasCall(call) || !supportChain(chain)) {
    throw new ReferenceError('Invalid path')
  }
  // const [chain, call, param] = path.split('/').filter(Boolean)
}
