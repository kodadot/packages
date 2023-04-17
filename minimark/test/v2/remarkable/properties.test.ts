import { describe, expect, it } from 'vitest'
import {
  convertAttributesToProperties,
  mergeProperties,
  resolveRoyalty
} from '../../../src/rmrk/v2/helper'
import { IProperties } from '../../../src/rmrk/v2/types'
import { Attribute } from '../../../src/common'

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

  it('should be converted from attributes', () => {
    const attribute: Attribute[] = [
      {
        trait_type: 'dress',
        value: 'black'
      },
      {
        trait_type: 'hair',
        value: 'pink'
      }
    ]

    const properties = convertAttributesToProperties(attribute)
    expect(properties).toEqual({
      dress: {
        type: 'string',
        value: 'black'
      },
      hair: {
        type: 'string',
        value: 'pink'
      }
    })
  })

  it('should be merged', () => {
    const defaultProps: IProperties = {
      dress: {
        type: 'string',
        value: 'black'
      }
    }

    const properties = mergeProperties(defaultProps, 'royaltyInfo', {
      type: 'royalty',
      value: {
        receiver: 'GksmaSfxzmD2Bxh7MZBTyGXTnGrQwoKnvukekh7JVzD8RVC',
        royaltyPercentFloat: 20
      }
    })

    expect(properties).toEqual({
      dress: {
        type: 'string',
        value: 'black'
      },
      royaltyInfo: {
        type: 'royalty',
        value: {
          receiver: 'GksmaSfxzmD2Bxh7MZBTyGXTnGrQwoKnvukekh7JVzD8RVC',
          royaltyPercentFloat: 20
        }
      }
    })
  })
})
