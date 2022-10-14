import { HttpProvider, WsProvider } from '@polkadot/api'

export function asHttpProvider(url: string): HttpProvider {
  return new HttpProvider(url)
}

export function asWsProvider(url: string): WsProvider {
  return new WsProvider(url)
}
