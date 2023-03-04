import { expect, it, describe } from 'vitest'
import { INDEXERS, APOLLO_ENDPOINTS } from '../src'

describe('Endpoints', () => {
  for (const key of Object.keys(INDEXERS)) {
    it(`should parse SQUID::${key} to APOLLO_INDEXER correctly`, () => {
      expect(APOLLO_ENDPOINTS[key]).toStrictEqual({
        httpEndpoint: INDEXERS[key],
      })
    })
  }
})
