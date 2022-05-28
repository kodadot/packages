import {
  validMintNFTRemarkEvent,
  mintRemarkValidMocks,
  changeUserRemarkValidMocks,
  validSendRemarkEvent,
  validListRemarkEvent,
  validBuyRemarkEvent,
} from './mock'
import unwrap from '../src/rmrk/unwrap'
import { InteractionValue } from '../src/rmrk/types'

describe('MINIMARK::RMRK ', () => {
  it('should ::MINTNFT', () => {
    const result = unwrap<any>(validMintNFTRemarkEvent)
    const expected = {
      collection: 'D4E195CCE7ADB3F876-INVITATION',
      sn: '0000000000000001',
      transferable: 1,
      name: 'VIP Invitation #1',
      metadata: 'ipfs://ipfs/QmQ2Q57PVpaP8QvWvvH9kfn1CdCY49pcv1AaLBjDwS2p4g',
      currentOwner: 'HPSgWwpjnMe9oyBq4t2dA3dRTU8PwDAU32q6E76xjFDDrEX',
      instance: 'VIP_INVITATION_1',
    }

    expect(result.interaction).toBe('MINTNFT')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })

  it('should ::MINT', () => {
    const result = unwrap<any>(mintRemarkValidMocks[0])
    const expected = {
      name: 'Foo',
      max: 5,
      issuer: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      symbol: 'FOO',
      id: 'd43593c715a56da27d-FOO',
      metadata: 'https://some.url',
    }

    expect(result.interaction).toBe('MINT')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })

  it('should ::CHANGEISSUER', () => {
    const result = unwrap<InteractionValue>(changeUserRemarkValidMocks[0])
    const expected: InteractionValue = {
      id: 'd43593c715a56da27d-BAR',
      value: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
    }

    expect(result.interaction).toBe('CHANGEISSUER')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })

  it('should ::SEND', () => {
    const result = unwrap<InteractionValue>(validSendRemarkEvent)
    const expected: InteractionValue = {
      id: 'F4677F38191256A73F-TTNKARDS-Celadon Woodash Tankard-0000000000000001',
      value: 'Fksmad33PFxhrQXNYPPJozgWrv82zuFLvXK7Rh8m1xQhe98',
    }

    expect(result.interaction).toBe('SEND')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })

  it('should ::LIST', () => {
    const result = unwrap<InteractionValue>(validListRemarkEvent)
    const expected: InteractionValue = {
      id: '6435603-D4E195CCE7ADB3F876-INVITATION-VIP_INVITATION_1-0000000000000001',
      value: '1000000000000',
    }

    expect(result.interaction).toBe('LIST')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })

  it('should ::BUY', () => {
    const result = unwrap<InteractionValue>(validBuyRemarkEvent)
    const expected: InteractionValue = {
      id: '6309833-282781680602E07B32-BIR-BIRTH_1-0000000000000001',
      value: undefined,
    }

    expect(result.interaction).toBe('BUY')
    expect(result.version).toBe('1.0.0')
    expect(result.value).toBeInstanceOf(Object)
    const { value } = result
    expect(value).toStrictEqual(expected)
  })
})
