import { expect, it, describe } from 'vitest'

import { isCreateInteraction } from '../../src/rmrk/shared/helpers'
import { Interaction } from '../../src/rmrk/v1/enums'

describe('RMRK/helpers ', () => {
  describe('isCreateInteraction', () => {
    it('MINTNFT is create', () => {
      expect(isCreateInteraction(Interaction.MINTNFT)).toBe(true)
    })

    it('MINT is create', () => {
      expect(isCreateInteraction(Interaction.MINT)).toBe(true)
    })

    it('SEND is NOT create', () => {
      expect(isCreateInteraction(Interaction.SEND)).toBe(false)
    })
  })
})
