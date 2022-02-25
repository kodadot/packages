
// import AbstractClient from './abstractClient'

import build from '../queryBuilder'
import { GraphQuery } from '../types'
import { getFields } from './defaults'

class SubqueryClient {
  protected nftById (id: string, fields?: Array<keyof GraphQuery>): GraphQuery {
    const toQuery = getFields(fields)
    return build('nftById', toQuery, { id })
  }
}

export default SubqueryClient
