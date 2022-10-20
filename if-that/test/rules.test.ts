import { describe, expect, it } from 'vitest'
import { build, parse } from '../src'
import { nftList, SomeNFT } from './data'

describe('Rules should', () => {
  const nft = nftList[0]

  it('be resolved properly', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const rules = '[{"===":[{"var":"currentOwner"},{"var":"issuer"}]},"metadata","ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru"]'
    const ifThat = parse<SomeNFT>(rules)
    const res = build(ifThat, nft)
    expect(res.metadata).eq(newMeta)
  })

  // it('build proper JSON logic', () => {
  //   const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
  //   const ifThat: IfThat<SomeNFT> = [eq<Variable<SomeNFT>>(asVar('currentOwner'), asVar('issuer')), 'metadata', newMeta]
  //   const stringified = JSON.stringify(ifThat)
  //   expect(stringified).eq('[{"===":[{"var":"currentOwner"},{"var":"issuer"}]},"metadata","ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru"]')
  // })
})
