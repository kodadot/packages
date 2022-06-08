import { expect, it, describe } from 'vitest'
import { parsePath } from '../src/rest/path'

describe('PATH UTILS', () => {
  describe('parse path should', () => {
    it('be fully defined', () => {
      const pathname = '/bsx/nft/0-1'
      const [chain, call, id] = parsePath(pathname)
      expect(chain).eq('bsx')
      expect(call).eq('nft')
      expect(id).eq('0-1')
    })

    it('have id undefined', () => {
      const pathname = '/bsx/nft'
      const [chain, call, id] = parsePath(pathname)
      expect(chain).eq('bsx')
      expect(call).eq('nft')
      expect(id).eq(undefined)
    })
  })
})
