import { expect, it, describe } from 'vitest'

import { createInteraction, createCollection, createNFT as createNFTV2, createBase } from '../../src/rmrk/v2/create'
import { InteractionV2 } from '../../src/rmrk/v2/constants'
import m, { Test } from './mock'

describe('RMRK2 Create Interaction', () => {
  function runInteractionTest(action: InteractionV2, mock: Test) {
    expect(createInteraction({
      action,
      payload: mock.payload
    })).toBe(mock.input)
  }

  it('should raise Error for unsupported interaction', () => {
    expect(() => createInteraction({
      action: 'HELLO'
    })).toThrowError(new Error('Unsupported action: HELLO'))
  })

  it('should create ACCEPT interaction', () => {
    runInteractionTest(InteractionV2.ACCEPT, m.acceptTest)
  })
  it('should create BASE interaction', () => {
    runInteractionTest(InteractionV2.BASE, m.baseTest)
  })
  it('should create BURN interaction', () => {
    runInteractionTest(InteractionV2.BURN, m.burnTest)
  })
  it('should create BUY interaction', () => {
    runInteractionTest(InteractionV2.BUY, m.buyTest)
    runInteractionTest(InteractionV2.BUY, m.buyTestWithRecipient)
  })
  it('should create CHANGEISSUER interaction', () => {
    runInteractionTest(InteractionV2.CHANGEISSUER, m.changeissuerTest)
  })
  it('should create CREATE interaction', () => {
    runInteractionTest(InteractionV2.CREATE, m.createTest)
  })

  it('should create EMOTE interaction', () => {
    runInteractionTest(InteractionV2.EMOTE, m.emoteTest)
    runInteractionTest(InteractionV2.EMOTE, m.emoteTestWithAccount)
  })

  it('should create EQUIP interaction', () => {
    runInteractionTest(InteractionV2.EQUIP, m.equipTest)
  })

  it('should create EQUIPPABLE interaction', () => {
    runInteractionTest(InteractionV2.EQUIPPABLE, m.equippableTest)
  })

  it('should create LIST interaction ', () => {
    runInteractionTest(InteractionV2.LIST, m.listTest)
    runInteractionTest(InteractionV2.LIST, m.listTestWithCancel)
  })

  it('should create MINT interaction', () => {
    runInteractionTest(InteractionV2.MINT, m.mintTest)
  })
  it('should create RESADD interaction', () => {
    runInteractionTest(InteractionV2.RESADD, m.resAddTest)
  })
  it('should create SEND interaction', () => {
    runInteractionTest(InteractionV2.SEND, m.sendTest)
  })
  it('should create SETPROPERTY interaction', () => {
    runInteractionTest(InteractionV2.SETPROPERTY, m.setPropertyTest)
  })
  it('should create SETPRIORITY interaction', () => {
    runInteractionTest(InteractionV2.SETPRIORITY, m.setPriorityTest)
  })
  it('should create THEMEADD interaction', () => {
    runInteractionTest(InteractionV2.THEMEADD, m.themeAddTest)
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
      .toThrowError(new Error('Props is undefined or null'))
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
    expect(createNFTV2(nftProps.index, nftProps.collectionId, '', nftProps.metadata)).toEqual({
      collection: '0aff6865bed3a66b-DLEP',
      transferable: 1,
      metadata: 'ipfs://ipfs/QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4',
      sn: '0000000000000001',
      symbol: 'DLEP'
    })
  })
})

describe('RMRK2 Create Base', () => {
  it('should raise Error for wrong params', () => {
    // symbol must not use dashes or dots
    expect(() => createBase({ symbol: 'this.at', parts: [] }))
      .toThrowError(new Error('Symbol must not use dashes or dots'))
    expect(() => createBase({ symbol: 'this-at', parts: [] }))
      .toThrowError(new Error('Symbol must not use dashes or dots'))

    // each parts must have an uniquely Id
    expect(() => createBase({ parts: [{ src: 'ipfs://ipfs/hash' }] }))
      .toThrowError(new Error('Id is required for part'))

    // default theme should set first before other theme was added
    expect(() => createBase({ themes: { sepia: 'ipfs://ipfs/theme1hash' } }))
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

    expect(createBase(onChainBase)).toEqual({ ...onChainBase, symbol: 'KANARIA_SUPERBIRD' })
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
    expect(createBase(offChainBase)).toEqual({
      ...offChainBase,
      symbol: 'KANARIA_SUPERBIRD'
    })
  })
})
