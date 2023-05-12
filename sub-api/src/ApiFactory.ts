import { ENDPOINT_MAP } from '@kodadot1/static'
import type { ApiPromise } from '@polkadot/api'
import Api from './instantapi'

type ApiType<T extends ApiPromise = ApiPromise> = T
const connectionMap: Map<string, ApiType<Api>> = new Map<string, ApiType<Api>>()

/**
 * Factory instance for @polkadot/api.
 */
class ApiFactory {
  public useApi(prefixOrUrl: string): ApiType<Api> {
    // usage
    // const api = await ApiFactory.useApi('bsx')
    if (this.isAlreadyConnected(prefixOrUrl)) {
      console.log(`[KODADOT::SUBAPI] LOG: Api already connected at ${prefixOrUrl}`)
      const api = connectionMap.get(prefixOrUrl)
      console.log('api.isConnected?', api.isConnected ? '💚' : '💀')
      if (api.isSpawned) {
        return api
      }
    }

    return this.initConnection(prefixOrUrl)
  }

  public useApiInstance(prefixOrUrl: string): Promise<ApiPromise> {
    const api = this.useApi(prefixOrUrl)
    return api.getInstance()
  }

  public byeApi(prefixOrUrl: string): void {
    if (this.isAlreadyConnected(prefixOrUrl)) {
      const api = connectionMap.get(prefixOrUrl)
      api.disconnect()
    } else {
      console.warn(`[KODADOT::SUBAPI] WARN: Cannot bye api at ${prefixOrUrl}`)
    }
  }

  private isAlreadyConnected(prefixOrUrl: string): boolean {
    return connectionMap.has(prefixOrUrl)
  }

  private initConnection(prefixOrUrl: string): ApiType<Api> {
    const url = this.getUrl(prefixOrUrl)
    const api = new Api(url)
    connectionMap.set(prefixOrUrl, api)
    return api
  }

  private getUrl(prefixOrUrl: string): string {
    return ENDPOINT_MAP[prefixOrUrl] || prefixOrUrl
  }
}

const factory = new ApiFactory()
export default factory
