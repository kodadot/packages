import { describe, expect, it } from 'vitest'
import { asVar, build, eq, IfThat, Variable } from '../src'
import { nftList, SomeNFT } from './data'

describe('Variable should', () => {
  const nft = nftList[0]
  it('resolve as variable properly', () => {
    const res = asVar<SomeNFT>('currentOwner')
    expect(res.var).eq('currentOwner')
  })

  it('build proper JSON logic', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const ifThat: IfThat<SomeNFT> = [eq<Variable<SomeNFT>>(asVar('currentOwner'), asVar('issuer')), 'metadata', newMeta]
    const stringified = JSON.stringify(ifThat)
    expect(stringified).eq('[{"===":[{"var":"currentOwner"},{"var":"issuer"}]},"metadata","ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru"]')
  })

  it('be build and executed ', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const ifThat: IfThat<SomeNFT> = [eq<Variable<SomeNFT>>(asVar('currentOwner'), asVar('issuer')), 'metadata', newMeta]
    const res = build([ifThat], nft)
    expect(res.metadata).eq(newMeta)
  })

  // it('be build and executed ', () => {
  //   const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
  //   const ifThat: IfThat<SomeNFT> = [eq<any>(asVar('currentOwner'), asVar('issuer')), 'meta.image' as any, newMeta]
  //   const res = build([ifThat], nft)
  //   expect(res.meta.image).eq(newMeta)
  // })
})
