import { ApiPromise } from '@polkadot/api'
import { getApiOptions } from './utils.js'
import { ApiExtension } from './types.js'
import { asWsProvider } from './helpers.js'
import { DETATCH_IN } from './constants'

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
    this.once('error', () => {
      console.warn('[KODADOT::SUBAPI] WARN: Unable to init api with apiUrl', apiUrl)
      this.detach()
    })
  }

  public getInstance(): Promise<ApiPromise> {
    return this.isReadyOrError
  }

  private detach() {
    console.log(`[KODADOT::SUBAPI] WARN: Detaching api in ${DETATCH_IN} ms`)
    setTimeout(() => {
      this.disconnect()
    }, DETATCH_IN)
  }

  private setUrl(apiUrl: string) {
    this._apiUrl = apiUrl
  }

  get url() {
    return this._apiUrl
  }
}

export default InstantApi
