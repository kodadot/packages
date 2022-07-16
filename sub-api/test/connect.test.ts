import { expect, it, describe } from 'vitest'
import onApiConnect from '../src/onApiConnect'
import { Endpoint } from './dummy'

describe('onApiConnect function', () => {
  const url = Endpoint.KSM
  it('Should create a meaningfull connection', () => {
    onApiConnect(url, (api) => {
      const ss58 = api.consts.system.ss58Prefix.toString()
      expect(ss58).eq('2')
      api.disconnect()
    })
  })

  it('Should log error when not connected', () => {
    onApiConnect(
      Endpoint.LOCAL,
      (api) => {
        const ss58 = api.consts.system.ss58Prefix.toString()
        expect(ss58).eq('42')
        api.disconnect()
      },
      (e) => {
        expect(e.message).eq('[KODADOT::SUBAPI] Error: cannot get instance at ws://127.0.0.1:9944')
      }
    )
  })
})
