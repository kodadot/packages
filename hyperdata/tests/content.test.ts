import { describe, expect, it } from 'vitest'
import { OpenSeaMetadata, TezosMetadata, contentFrom, attributeFrom, FXHashMetadata } from '../src'
import fxhash from './examples/fxhash.json'
import koda from './examples/koda.json'
import poc from './examples/proof-of-chaos.json'

describe('contentFrom', () => {
  it(`should parse FXhash metadata to Content correctly`, () => {
    const metadata = fxhash as FXHashMetadata
    expect(contentFrom(metadata)).toStrictEqual({
      _raw: undefined,
      name: metadata.name,
      description: metadata.description,
      image: metadata.displayUri,
      animationUrl: metadata.artifactUri,
      attributes: [],
      banner: undefined,
      externalUrl: metadata.externalUri,
      generative: undefined,
      generativeUri: metadata.generativeUri,
      kind: undefined,
      tags: [],
      thumbnail: metadata.thumbnailUri,
      type: '',
    })
  })

  it(`should parse Koda metadata to Content correctly`, () => {
    const metadata = koda as OpenSeaMetadata
    expect(contentFrom(metadata)).toStrictEqual({
      _raw: undefined,
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      animationUrl: metadata.animation_url,
      attributes: [
        {
          display: '',
          trait: 'ID',
          value: '1082',
        },
        {
          display: '',
          trait: 'Type',
          value: 'Dolphin',
        },
        {
          display: '',
          trait: 'Rarity',
          value: 'Rare',
        },
      ],
      banner: undefined,
      externalUrl: metadata.external_url,
      generative: undefined,
      generativeUri: undefined,
      kind: undefined,
      tags: [],
      thumbnail: undefined,
      type: '',
    })
  })

  it(`should parse Proof of Chaos metadata to Content correctly`, () => {
    const metadata = poc as OpenSeaMetadata
    expect(contentFrom(metadata)).toStrictEqual({
      _raw: undefined,
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      animationUrl: metadata.animation_url,
      attributes: metadata.attributes?.map(attributeFrom) || [],
      banner: undefined,
      externalUrl: metadata.external_url,
      generative: undefined,
      generativeUri: undefined,
      kind: undefined,
      tags: [],
      thumbnail: undefined,
      type: 'video/mp4',
    })
  })
})
