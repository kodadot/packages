import { expect, it, describe } from 'vitest'
import { getUrl } from '../src'

describe('KODAPI UTILS', () => {
  describe('getURL', () => {
    it('should return default kusama indexer', () => {
      const url = getUrl('kusama')
      expect(url).eq('https://kodadot.api.subquery.network')
    })

    it('should return subquery kusama indexer', () => {
      const url = getUrl('kusama', 'subquery')
      expect(url).eq('https://kodadot.api.subquery.network')
    })

    it('should throw on subsquid kusama indexer', () => {
      const fn = () => getUrl('kusama', 'subsquid')
      expect(fn).toThrow(ReferenceError)
    })
  })
})
