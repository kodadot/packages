import { expect, it, describe } from 'vitest'
import Factory from '../src/ApiFactory'

describe('Factory instance', () => {
  const url = 'wss://kusama-rpc.polkadot.io'
  it('Should create a meaningfull connection', async () => {
    const api = await Factory.useApi(url).getInstance()
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
    api.disconnect()
  })
})
