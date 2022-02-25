
import SubqueryClient from './SubqueryClient'

function getClient (chain: string, indexer: 'subquery' | 'subsquid'): any {
  console.log('chain', chain)
  if (indexer === 'subquery') {
    return new SubqueryClient()
  }

  return new SubqueryClient()
}

export default getClient
