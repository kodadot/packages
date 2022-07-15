import { expect, it, describe } from 'vitest'
import { useApi } from '../src/useApi'

describe('SUB API', () => {
  const url = 'https://moonriver.public.blastapi.io/'
  it('Should return some data', async () => {
    const api = await useApi(url)
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('1285')
  })
})
