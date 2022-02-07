import { isCreateInteraction } from '../src/rmrk/helpers'
import { Interaction } from '../src/rmrk/types'

describe('RMRK/helpers ', () => {
  describe('isCreateInteraction', () => {
    it('MINTNFT is create', () => {
      expect(isCreateInteraction(Interaction.MINTNFT)).toBe(true)
    })

    it('MINT is create', () => {
      expect(isCreateInteraction(Interaction.MINT)).toBe(true)
    })

    it('SEND is NOT create', () => {
      expect(isCreateInteraction(Interaction.MINT)).toBe(true)
    })
  })
})
