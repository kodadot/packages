export const mintRemarkValidMocks = [
  'RMRK::MINT::1.0.0::{"name"%3A"Foo"%2C"max"%3A5%2C"issuer"%3A"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"%2C"symbol"%3A"FOO"%2C"id"%3A"d43593c715a56da27d-FOO"%2C"metadata"%3A"https%3A%2F%2Fsome.url"}',
  'RMRK::MINT::1.0.0::{"name"%3A"Test Batch"%2C"max"%3A5%2C"issuer"%3A"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"%2C"symbol"%3A"TB"%2C"id"%3A"d43593c715a56da27d-TB"%2C"metadata"%3A"https%3A%2F%2Fsome.url"}',
  'RMRK::MINT::1.0.0::{"name"%3A"Test Batch 2"%2C"max"%3A5%2C"issuer"%3A"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"%2C"symbol"%3A"TB2"%2C"id"%3A"d43593c715a56da27d-TB2"%2C"metadata"%3A"https%3A%2F%2Fsome.url"}',
  'RMRK::MINT::1.0.0::{"name"%3A"Bar"%2C"max"%3A5%2C"issuer"%3A"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"%2C"symbol"%3A"BAR"%2C"id"%3A"d43593c715a56da27d-BAR"%2C"metadata"%3A"https%3A%2F%2Fsome.url"}',
  'RMRK::MINT::1.0.0::{"name"%3A"Foo"%2C"max"%3A5%2C"issuer"%3A"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"%2C"symbol"%3A"FOO"%2C"id"%3A"d43593c715a56da27d-FOO"%2C"metadata"%3A"https%3A%2F%2Fsome.url"}',
]

export const changeUserRemarkValidMocks = [
  'RMRK::CHANGEISSUER::1.0.0::d43593c715a56da27d-BAR::5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
  'RMRK::CHANGEISSUER::1.0.0::d43593c715a56da27d-BAR::5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
]

export const validSendRemarkEvent =
  'RMRK::SEND::1.0.0::F4677F38191256A73F-TTNKARDS-Celadon Woodash Tankard-0000000000000001::Fksmad33PFxhrQXNYPPJozgWrv82zuFLvXK7Rh8m1xQhe98'
export const validListRemarkEvent = 'RMRK::LIST::1.0.0::6435603-D4E195CCE7ADB3F876-INVITATION-VIP_INVITATION_1-0000000000000001::1000000000000'
export const validMintNFTRemarkEvent =
  'RMRK::MINTNFT::1.0.0::{"collection"%3A"D4E195CCE7ADB3F876-INVITATION"%2C"sn"%3A"0000000000000001"%2C"transferable"%3A1%2C"name"%3A"VIP Invitation %231"%2C"metadata"%3A"ipfs%3A%2F%2Fipfs%2FQmQ2Q57PVpaP8QvWvvH9kfn1CdCY49pcv1AaLBjDwS2p4g"%2C"currentOwner"%3A"HPSgWwpjnMe9oyBq4t2dA3dRTU8PwDAU32q6E76xjFDDrEX"%2C"instance"%3A"VIP_INVITATION_1"}'
export const validBuyRemarkEvent = 'RMRK::BUY::1.0.0::6309833-282781680602E07B32-BIR-BIRTH_1-0000000000000001'
export const validEmoteRemarkEvent = 'RMRK::EMOTE::1.0.0::6431478-10D77F8B699437BB50-TXT-JUNGLE_TEXTURE-0000000000000001::1F496'
export const validConsumeRemarkEvent = 'RMRK::CONSUME::1.0.0::6277640-D4E195CCE7ADB3F876-SUPER GIFS-GOODBYE_BULLIES!-0000000000000002'


export const NFT_ID = '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001'

export const RESADD_EVENT = `RMRK::RESADD::2.0.0::${NFT_ID}::%7B%22id%22%3A%22V1i6B%22%2C%22src%22%3A%22hash-of-metadata-guest-bird-art-with-jetpack%22%2C%22metadata%22%3A%22hash-of-metadata-with-credits%22%7D`
export const CollectionV2 = {
  "max": 100,
  "issuer": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
  "symbol": "DLEP",
  "id": "0aff6865bed3a66b-DLEP",
  "metadata": "ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j"
}

export const NFTV2 = {
  "collection": "0aff6865bed3a66b-DLEP",
  "symbol": "DL15",
  "transferable": 1,
  "sn": "00000001",
  "metadata": "ipfs://ipfs/QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4"
}