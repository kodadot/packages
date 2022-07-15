import { ApiPromise } from '@polkadot/api'
import { getApiOptions } from './utils.js'
import { ApiExtension } from './types.js'
import { asWsProvider } from './helpers.js'

/**
 * Some wrapper Instance for @polkadot/api.
 */
class InstantApi extends ApiPromise {
  private _apiUrl: string

  constructor(apiUrl: string, overrideOptions?: ApiExtension) {
    const provider = asWsProvider(apiUrl)
    const options = overrideOptions ?? getApiOptions(apiUrl)
    super({ provider, ...options })
    this.setUrl(apiUrl)
  }

  public getInstance(): Promise<ApiPromise> {
    return this.isReady
  }

  private setUrl(apiUrl: string) {
    this._apiUrl = apiUrl
  }

  get url() {
    return this._apiUrl
  }
}

export default InstantApi
