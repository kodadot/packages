import { Provider } from '../types'

import SubqueryClient from './SubqueryClient'
import SquidClient from './SquidClient'

type Client = SquidClient | SubqueryClient

function getClient (indexer?: Provider): Client {
  if (isSubQuery(indexer)) {
    return new SubqueryClient()
  }

  return new SquidClient()
}

export function isSubQuery (provider?: Provider) {
  return provider === 'subquery'
}

export default getClient
