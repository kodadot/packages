import { expect, it, describe } from 'vitest'
import { IfThat, eq, build, gt, lte } from '../src'
import { nftList, SomeNFT } from './data'

describe('Builder should', () => {
  const nft = nftList[0]
  it('change metadata if data are equal', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const ifThat: IfThat<SomeNFT> = [eq(nft.currentOwner, nft.issuer), 'metadata', newMeta]
    const res = build([ifThat], nft)
    expect(res.metadata).eq(newMeta)
    expect(nft.metadata).not.eq(res.metadata)
  })

  it('remove metadata if data are greater than', () => {
    nft.previousOwnerCount = 6
    const ifThat: IfThat<SomeNFT> = [gt(nft.previousOwnerCount, 5), 'metadata', '']
    const res = build([ifThat], nft)
    expect(res.metadata).eq('')
  })

  it('change metadata if can pass multiple conditions', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const ifThat: IfThat<SomeNFT> = [[eq(nft.currentOwner, nft.issuer), lte(nft.royalty, 26)], 'metadata', newMeta]
    const res = build([ifThat], nft)
    expect(res.metadata).eq(newMeta)
  })
})
