// /bsx/nft/:id
import { $fetch } from 'ohmyfetch'
import { GraphRequest } from './types'
import { getOptions } from './utils'


function askFor<T> (path: string): Promise<T> {
  // Get all path params
  // get the metadata
  // Construct the call
  return $fetch<T>(path, getOptions({} as GraphRequest)
}

export default askFor
