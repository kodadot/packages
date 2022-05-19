import { expect, it, describe } from 'vitest'
import { IfThat, eq, build } from '../src'
import { nftList, SomeNFT } from './data'

describe('Welcome to the Black Parade', () => {
  const nft = nftList[0]
  it('sometimes I get the feeling she is watching over me', () => {
    const newMeta = 'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru'
    const ifThat: IfThat<SomeNFT> = [eq(nft.currentOwner, nft.issuer), 'metadata', newMeta]
    const res = build([ifThat], nft)
    expect(res.metadata).eq(newMeta)
    expect(nft.metadata).not.eq(res.metadata)
  })
})
