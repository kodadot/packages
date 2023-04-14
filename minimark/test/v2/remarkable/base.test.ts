import { describe, expect, it } from 'vitest'
import { resolveEquippable } from '../../../src/rmrk/v2/helper'

describe('RMRK2 Base', () => {
  describe('Part Equippable', () => {
    it('should do replace if * present', () => {
      const equippable = resolveEquippable('*')
      const result = { operation: '*', collections: ['*'] }
      expect(equippable).toStrictEqual(result)
    })
    it('should do replace if *KEK present', () => {
      const equippable = resolveEquippable('*')
      const result = { operation: '*', collections: ['*'] }
      expect(equippable).toStrictEqual(result)
    })
    it('should do replace if KEK present', () => {
      const equippable = resolveEquippable('KEK')
      const result = { operation: '*', collections: ['KEK'] }
      expect(equippable).toStrictEqual(result)
    })
    it('should do replace if +KEK present', () => {
      const equippable = resolveEquippable('+KEK')
      const result = { operation: '+', collections: ['KEK'] }
      expect(equippable).toStrictEqual(result)
    })
    it('should do replace if -KEK present', () => {
      const equippable = resolveEquippable('-KEK')
      const result = { operation: '-', collections: ['KEK'] }
      expect(equippable).toStrictEqual(result)
    })
    it('should do replace if +KEK,LOL present', () => {
      const equippable = resolveEquippable('+KEK,LOL')
      const result = { operation: '+', collections: ['KEK', 'LOL'] }
      expect(equippable).toStrictEqual(result)
    })
  })
})
