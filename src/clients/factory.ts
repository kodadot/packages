import { Provider } from '../types'

import SubqueryClient from './SubqueryClient'
import SquidClient from './SquidClient'

type Client = SquidClient | SubqueryClient

function getClient (indexer?: Provider): Client {
  if (indexer === 'subquery') {
    return new SubqueryClient()
  }

  return new SquidClient()
}

export default getClient
