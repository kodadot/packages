import { ApiPromise } from '@polkadot/api'
import { DETATCH_IN } from './constants'
import { asWsProvider } from './helpers.js'
import { ApiExtension, ApiUrl } from './types.js'

/**
 * Some wrapper Instance for @polkadot/api.
 */
class InstantApi extends ApiPromise {
  private _apiUrl: ApiUrl
  private _isSpawned: boolean
  // private _initiatedAt: number

  constructor(apiUrl: ApiUrl, overrideOptions?: ApiExtension) {
    const provider = asWsProvider(apiUrl)
    const options = overrideOptions
    super({ provider, ...options, throwOnConnect: true })
    this.setUrl(apiUrl)
    this.setSpawn()
    // this._initiatedAt = Date.now()
    this.once('error', () => {
      console.warn(
        '[KODADOT::SUBAPI] WARN: Unable to init api with apiUrl',
        apiUrl
      )
    })
    this.once('disconnected', () => {
      console.warn(
        '[KODADOT::SUBAPI] LOG: Api disconnected',
        apiUrl
      )
      this.detach()
      this.setSpawn(false)
    })
  }

  public getInstance(): Promise<ApiPromise> {
    return this.isReadyOrError.then(
      api => api,
      () => {
        throw new EvalError(`[KODADOT::SUBAPI] Error: cannot get instance at ${this._apiUrl}`)
      })
  }

  get instance(): Promise<ApiPromise> {
    return this.isReadyOrError
  }

  get isSpawned(): boolean {
    return this._isSpawned
  }

  protected async revive() {
    if (this.isDead) {
      console.warn('[KODADOT::SUBAPI] WARN: Reviving api')
      await this.clone()
    } else {
      console.log('[KODADOT::SUBAPI] LOG: Api is already connected')
    }
  }

  private detach() {
    console.warn(`[KODADOT::SUBAPI] WARN: Detaching api in ${DETATCH_IN} ms`)
    setTimeout(() => {
      this.disconnect()
    }, DETATCH_IN)
  }

  private setSpawn(spawn = true) {
    this._isSpawned = spawn
  }

  private setUrl(apiUrl: ApiUrl) {
    this._apiUrl = apiUrl
  }

  get isDead(): boolean {
    return this.isConnected === false
  }

  get url(): ApiUrl {
    return this._apiUrl
  }
}

export default InstantApi
