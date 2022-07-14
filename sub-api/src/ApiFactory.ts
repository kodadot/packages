import { ApiPromise } from '@polkadot/api'
import Api from './Instapi'

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
      throw new Error('not implemened yet')
    }

    return this.initConnection(prefixOrUrl)
  }

  private isAlreadyConnected(prefixOrUrl: string): boolean {
    return connectionMap.has(prefixOrUrl)
  }

  private initConnection(prefixOrUrl: string): ApiType<Api> {
    const api = new Api(prefixOrUrl)
    connectionMap.set(prefixOrUrl, api)
    return api
  }
}

const factory = new ApiFactory()
export default factory
