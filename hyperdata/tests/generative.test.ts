import { describe, expect, it } from 'vitest'
import { FXHashMetadata, GenArt, generativeFrom } from '../src'
import fxhash from './examples/fxhash.json'
import koda from './examples/koda-generative-collection.json'

describe('generativeFrom', () => {
  it(`should parse FXhash metadata to Content correctly`, () => {
    const metadata = fxhash as FXHashMetadata
    const res: GenArt = {
      uri: metadata.generativeUri || metadata.generatorUri || '',
      hash: metadata.previewHash,
      previewParam: 'fxhash',
      capture: metadata.capture || {},
      settings: metadata.settings || {},
    }

    expect(generativeFrom(metadata)).toStrictEqual(res)
  })

  it('should parse koda.art generative metadata correctly', () => {
    const metadata = koda

    expect(generativeFrom(metadata)).toStrictEqual({
      uri: metadata.generative_uri,
      previewParam: 'hash',
      capture: undefined,
      hash: undefined,
      settings: undefined,
    })
  })
})
