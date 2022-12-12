import { describe, expect, it } from 'vitest'

import { createBase, createCollection, createInteraction, createNFT } from '../../../src/rmrk/v2/create'

import { Base, Collection, NFT } from 'rmrk-tools'

const issuer = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'


describe.only('RMRK-team represents Create', () => {
  describe('Collection', () => {
    const symbol = 'CHNK'
    const max = 20
    const metadata = 'ipfs://ipfs/bafkreiefmtvvjnqnlqs2dzavsyble5ft5ly7xtu4pg7tpo5gf4sovputwy'
    const rmrk = new Collection(0, max, issuer, symbol, 'd43593c715a56da27d-CHNK', metadata)
    const minimark = createCollection(issuer, symbol, 'Chunky', metadata, max)

    const toTest: (keyof Collection)[] = ['issuer', 'symbol', 'max', 'metadata']

    for (const property of toTest) {
      it(`should return same ${property}`, () => {
        expect(rmrk[property]).toBe(minimark[property])
      })
    }
  })

  describe('NFT', () => {
    const symbol = 'chunky_bird_1'
    const collectionId = 'd43593c715a56da27d-CHNK'
    const metadata = 'ipfs://ipfs/bafkreiefmtvvjnqnlqs2dzavsyble5ft5ly7xtu4pg7tpo5gf4sovputwy'
    const rmrk = new NFT({ block: 0, collection: collectionId, metadata, sn: '00000001', symbol, transferable: 1 })
    const minimark = createNFT(0, collectionId, 'Chunky Bird 1', metadata)

    const toTest: (keyof NFT)[] = ['collection', 'sn', 'symbol', 'metadata']

    for (const property of toTest) {
      it(`should return same ${property}`, () => {
        expect(rmrk[property]).toBe(minimark[property])
      })
    }
  })


  describe('BASE', () => {
    const metadata = 'ipfs://ipfs/bafkreiefmtvvjnqnlqs2dzavsyble5ft5ly7xtu4pg7tpo5gf4sovputwy'
    const rmrk = new Base(0, 'CHNKBS', issuer, 'svg', undefined, undefined, metadata)
    const minimark = createBase({ symbol: 'CHNKBS', metadata, type: 'svg', parts: [] })

    const toTest: (keyof Base)[] = ['symbol', 'metadata', 'type']

    for (const property of toTest) {
      it(`should return same ${property}`, () => {
        expect(rmrk[property]).toBe(minimark[property])
      })
    }
  })

})
