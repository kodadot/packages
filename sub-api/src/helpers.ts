import { HttpProvider, WsProvider } from '@polkadot/api'
import { ApiUrl } from './types'

export function asHttpProvider(url: string): HttpProvider {
  return new HttpProvider(url)
}

export function asWsProvider(url: ApiUrl): WsProvider {
  return new WsProvider(url)
}
