import { expect, it, describe } from 'vitest'
import Api from '../src/Api'
import { Endpoint } from './dummy'

describe.skip('SUB API', () => {
  it('Should return some data', async () => {
    const api = await Api.getInstance().connect(Endpoint.KSM)
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
  }, 20000)
})
