import { describe, expect, it } from 'vitest'

import { createBase, createCollection, createInteraction, createNFT as createNFTV2 } from '../../src/rmrk/v2/create'
import { Interaction } from '../../src/rmrk/v2/enums'
import {
  acceptTest,
  baseTest,
  burnTest,
  buyTest,
  buyTestWithRecipient,
  changeissuerTest,
  createTest,
  emoteTest,
  emoteTestWithAccount, equippableTest, equipTest, listTest,
  listTestWithCancel,
  mintTest,
  resAddTest,
  sendTest, setPriorityTest, setPropertyTest, Test, themeAddTest
} from './mock'

describe('RMRK2 Create Interaction', () => {
  function runInteractionTest(action: Interaction, mock: Test) {
    expect(createInteraction({
      action: action as any,
      payload: mock.payload
    })).toBe(mock.input)
  }

  it('should raise Error for unsupported interaction', () => {
    const action = 'HELLO' as any
    expect(() => createInteraction({
      action,
      payload: { id: 'asd' }
    })).toThrowError(new Error('Unsupported action: HELLO'))
  })

  it('should create ACCEPT interaction', () => {
    runInteractionTest(Interaction.ACCEPT, acceptTest)
  })
  it('should create BASE interaction', () => {
    runInteractionTest(Interaction.BASE, baseTest)
  })
  it('should create BURN interaction', () => {
    runInteractionTest(Interaction.BURN, burnTest)
  })
  it('should create BUY interaction', () => {
    runInteractionTest(Interaction.BUY, buyTest)
    runInteractionTest(Interaction.BUY, buyTestWithRecipient)
  })
  it('should create CHANGEISSUER interaction', () => {
    runInteractionTest(Interaction.CHANGEISSUER, changeissuerTest)
  })
  it('should create CREATE interaction', () => {
    runInteractionTest(Interaction.CREATE, createTest)
  })

  it('should create EMOTE interaction', () => {
    runInteractionTest(Interaction.EMOTE, emoteTest)
    runInteractionTest(Interaction.EMOTE, emoteTestWithAccount)
  })

  it('should create EQUIP interaction', () => {
    runInteractionTest(Interaction.EQUIP, equipTest)
  })

  it('should create EQUIPPABLE interaction', () => {
    runInteractionTest(Interaction.EQUIPPABLE, equippableTest)
  })

  it('should create LIST interaction ', () => {
    runInteractionTest(Interaction.LIST, listTest)
    runInteractionTest(Interaction.LIST, listTestWithCancel)
  })

  it('should create MINT interaction', () => {
    runInteractionTest(Interaction.MINT, mintTest)
  })
  it('should create RESADD interaction', () => {
    runInteractionTest(Interaction.RESADD, resAddTest)
  })
  it('should create SEND interaction', () => {
    runInteractionTest(Interaction.SEND, sendTest)
  })
  it('should create SETPROPERTY interaction', () => {
    runInteractionTest(Interaction.SETPROPERTY, setPropertyTest)
  })
  it('should create SETPRIORITY interaction', () => {
    runInteractionTest(Interaction.SETPRIORITY, setPriorityTest)
  })
  it('should create THEMEADD interaction', () => {
    runInteractionTest(Interaction.THEMEADD, themeAddTest)
  })
})

describe('RMRK2 Create Collection', () => {
  const collectionProps = {
    max: 100,
    issuer: 'CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp',
    symbol: 'DLEP',
    id: '0aff6865bed3a66b-DLEP',
    metadata: 'ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j'
  }
  it('should throw Error for wrong parameter', () => {
    const wrongCollection = () => createCollection('CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp', collectionProps.symbol, undefined, collectionProps.metadata, -1)
    expect(createCollection)
      .toThrowError(new Error('[RMRK] Could not create collection, because caller is empty'))
    // max checking
    expect(wrongCollection).toThrow()
  })

  it('should return created Collection', () => {
    const collection = createCollection('CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp', collectionProps.symbol, undefined, collectionProps.metadata, collectionProps.max)
    expect(collection).toEqual({
      max: 100,
      issuer: collectionProps.issuer,
      symbol: 'DLEP',
      id: '0AFF686563BED3A66B-DLEP',
      name: '',
      metadata: 'ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j'
    })
  })
})

describe('RMRK2 Create NFT', () => {
  const nftProps = {
    collectionId: '0aff6865bed3a66b-DLEP',
    transferable: 1,
    symbol: 'DLEP',
    index: 0,
    metadata: 'ipfs://ipfs/QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4'
  }

  it('should return created NFT', () => {
    expect(createNFTV2(nftProps.index, nftProps.collectionId, ' ChUnky_DleP-ONE ', nftProps.metadata)).toEqual({
      collection: '0aff6865bed3a66b-DLEP',
      transferable: 1,
      metadata: 'ipfs://ipfs/QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4',
      name: ' ChUnky_DleP-ONE ',
      sn: '00000001',
      symbol: 'CHUNKY_DLEPONE'
    })
  })
})

describe('RMRK2 Create Base', () => {
  it('should handle correctly the symbol', () => {
    // symbol must not use dashes or dots
    const baseWithDotSymbol = createBase({ symbol: 'this.at', parts: [] })

    expect(baseWithDotSymbol.symbol).toBe('thisat')

    const baseWithDashSymbol = createBase({ symbol: 'this-at', parts: [] })
    expect(baseWithDashSymbol.symbol).toBe('thisat')
  })

  it('should raise Error for wrong params', () => {
    // symbol must not use dashes or dots
    // each parts must have an uniquely Id
    const parts = [{ src: 'ipfs://ipfs/hash' }] as any
    expect(() => createBase({ parts, symbol: 'KEK' }))
      .toThrowError(new Error('Id is required for part'))

    // default theme should set first before other theme was added
    expect(() => createBase({ themes: { sepia: 'ipfs://ipfs/theme1hash' }, parts, symbol: 'KEK' }))
      .toThrowError(new Error('Missing default key for theme'))
  })

  it('should create on-chain BASE', () => {
    const onChainBase = {
      symbol: 'kanaria_superbird',
      type: 'svg',
      parts: [
        {
          id: 'bg',
          src: 'ipfs://ipfs/hash',
          thumb: 'ipfs://ipfs/hash',
          type: 'slot' as const,
          equippable: ['collection_1', 'collection_2'],
          z: 3
        },
        {
          id: 'gem_1',
          src: 'ipfs://ipfs/hash',
          type: 'fixed' as const,
          z: 4
        },
        {
          id: 'wing_1_back',
          src: 'ipfs://ipfs/hash',
          metadata: 'ipfs://ipfs/hash'
        },
        {
          id: 'wing_1_front',
          metadata: 'ipfs://ipfs/hash2'
        }
      ]
    }

    expect(createBase(onChainBase as any)).toEqual({ ...onChainBase, symbol: 'kanaria_superbird' })
  })

  it('should create off-chain BASE', () => {
    const offChainBase = {
      symbol: 'kanaria_superbird',
      parts: [
        {
          id: 'bg',
          metadata: 'ipfs://ipfs/hash'
        }
      ]
    }
    expect(createBase(offChainBase as any)).toEqual({
      ...offChainBase,
      symbol: 'kanaria_superbird'
    })
  })
})
