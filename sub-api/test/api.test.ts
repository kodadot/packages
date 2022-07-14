import { expect, it, describe } from 'vitest'
import Api from '../src/Api'

describe.skip('SUB API', () => {
  // const url = 'https://moonriver.public.blastapi.io/'
  const url = 'wss://kusama-rpc.polkadot.io'
  it('Should return some data', async () => {
    const api = await Api.getInstance().connect(url)
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
  }, 20000)
})
