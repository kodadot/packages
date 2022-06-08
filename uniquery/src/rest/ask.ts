// /bsx/nft/:id
import { $fetch } from 'ohmyfetch'
import { pathToRequest } from './path'
import { GraphRequest } from './types'
import { getOptions } from './utils'

const GRAPHQL_PATH = '/graphql'

function askFor<T> (path: string): Promise<T> {
  const request = pathToRequest(path) as unknown as GraphRequest
  const options = getOptions(request)
  return $fetch<T>(GRAPHQL_PATH, options)
}

export default askFor
