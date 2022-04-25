import { expect, it, describe } from 'vitest'
import { getFilters } from '../src/clients/filters'

describe('FILTERS', () => {
  describe('getFilters', () => {
    it('should return correct data for subsquid filter', () => {
      const filters = getFilters([['blockNumber'], ['price', ['ASC']], ['updatedAt', ['ASC', 'DESC']]], 'subsquid')
      const [bnA, bnD, pA, uaA, uaD] = filters
      expect(bnA).eq('blockNumber_ASC')
      expect(bnD).eq('blockNumber_DESC')
      expect(pA).eq('price_ASC')
      expect(uaA).eq('updatedAt_ASC')
      expect(uaD).eq('updatedAt_DESC')
    })

    it.skip('should return correct data for subquery filter', () => {
      // TODO: FIX
      const filters = getFilters([['blockNumber'], ['price', ['ASC']], ['updatedAt', ['ASC', 'DESC']]], 'subsquid')
      const [bnA, bnD, pA, uaA, uaD] = filters
      expect(bnA).eq('blockNumber_ASC')
      expect(bnD).eq('blockNumber_DESC')
      expect(pA).eq('price_ASC')
      expect(uaA).eq('updatedAt_ASC')
      expect(uaD).eq('updatedAt_DESC')
    })
  })
})
