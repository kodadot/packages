import { expect, it, describe } from 'vitest'

import { toSerialNumber, findUniqueSymbol, makeSymbol } from '../../src/rmrk/shared/identification'

describe('RMRK/identification ', () => {
  describe('toSerialNumber', () => {
    it('should return +1', () => {
      expect(toSerialNumber(0)).toBe('0000000000000001')
    })

    it('should return +1 with offset 1', () => {
      expect(toSerialNumber(0, 1)).toBe('0000000000000002')
    })

    it('should return same number with plusOne disabled', () => {
      expect(toSerialNumber(0, 0, false)).toBe('0000000000000000')
    })
  })

  describe('findUniqueSymbol', () => {
    it('should return symbol if was unused', () => {
      expect(findUniqueSymbol('VIKI', ['VIK', 'VI'])).toBe('VIKI')
    })

    it('should return new symbol if was already used', () => {
      expect(findUniqueSymbol('VIKI', ['VIK', 'VIKI'])).not.toBe('VIKI')
    })
  })

  describe('makeSymbol', () => {
    it('should return random symbol when not defined', () => {
      const symbol = makeSymbol()
      expect(symbol.length).toBe(13)
    })

    it('should return new symbol if was already used', () => {
      expect(makeSymbol('viki ')).toBe('VIKI')
    })
  })
})
