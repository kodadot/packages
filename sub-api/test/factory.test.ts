import { expect, it, describe } from 'vitest'
import Factory from '../src/ApiFactory'
import { Endpoint } from './dummy'

describe('Factory instance', () => {
  const url = Endpoint.KSM
  it('Should create a meaningfull connection', async () => {
    const api = await Factory.useApiInstance(url)
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
    api.disconnect()
  })

  it('Should create a meaningfull connection via prefix', async () => {
    const api = await Factory.useApiInstance('ahp')
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('0')
    api.disconnect()
  })
})
