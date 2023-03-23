
import { describe, expect, it } from 'vitest'
import { resolveRoyalty } from '../../../src/rmrk/v2/helper'
import { IProperties } from '../../../src/rmrk/v2/types'

describe('RMRK2 Properties', () => {
  it('royaltyinfo should be extracted', () => {
    const properties: IProperties = {
      royaltyInfo: {
        type: 'royalty',
        value: {
          receiver: 'GksmaSfxzmD2Bxh7MZBTyGXTnGrQwoKnvukekh7JVzD8RVC',
          royaltyPercentFloat: 20
        }
      }
    }

    const royalty = resolveRoyalty(properties)
    expect(royalty).toEqual({
      receiver: 'GksmaSfxzmD2Bxh7MZBTyGXTnGrQwoKnvukekh7JVzD8RVC',
      percent: 20
    })
  })
})
