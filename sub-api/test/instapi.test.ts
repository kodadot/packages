import { expect, it, describe } from 'vitest'
import Api from '../src/instantapi'
import { Endpoint } from './dummy'

describe('Custom instance of ApiPromise', () => {
  it.skip('Should return some data', async () => {
    const url = Endpoint.KSM
    const api = await new Api(url).getInstance()
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
    api.disconnect()
  })

  it('Should throw when not connected', async () => {
    const url = Endpoint.LOCAL
    try {
      const api = await new Api(url).getInstance()
      const ss58 = api.consts.system.ss58Prefix.toString()
      expect(ss58).eq('42')
      api.disconnect()
    } catch (e) {
      expect(e.message).eq('[KODADOT::SUBAPI] Error: cannot get instance at ws://127.0.0.1:9944')
    }
  }, 10000)
})
