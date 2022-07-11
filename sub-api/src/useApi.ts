import { HttpProvider, ApiPromise } from '@polkadot/api'
// import { ApiExtension } from './types'
import { HTTP_PREFIX, WS_PREFIX } from './constants'

export function useApi(prefixOrUrl: string): Promise<ApiPromise> {
  const provider = asHttpProvider(getUrl(prefixOrUrl))
  return ApiPromise.create({ provider })
}

function getUrl(prefixOrUrl: string): string {
  if (isWebSocketUrl(prefixOrUrl)) {
    throw new ReferenceError('[KODADOT::SUBAPI] ERR: WebSocket url is not supported')
  }

  if (isHttptUrl(prefixOrUrl)) {
    return prefixOrUrl
  }

  return getUrlByPrefix(prefixOrUrl)
}

function asHttpProvider(url: string): HttpProvider {
  return new HttpProvider(url)
}

function isWebSocketUrl(url: string): boolean {
  return WS_PREFIX.test(url)
}

function isHttptUrl(url: string): boolean {
  return HTTP_PREFIX.test(url)
}

function getUrlByPrefix(maybePrefix: string): string {
  return 'http://' + maybePrefix
  // console.log('[KODADOT::SUBAPI] WARN: No url prefix provided, using default http://localhost:9944')
  // throw new Error('Method not implemented.')
}
