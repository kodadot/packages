
import SubqueryClient from './SubqueryClient'
import SquidClient from './SquidClient'

type Client = SquidClient | SubqueryClient

function getClient (indexer?: 'subquery' | 'subsquid'): Client {
  if (indexer === 'subquery') {
    return new SubqueryClient()
  }

  return new SquidClient()
}

export default getClient
