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
  private _isSpawned: boolean
  // private _initiatedAt: number

  constructor(apiUrl: string, overrideOptions?: ApiExtension) {
    const provider = asWsProvider(apiUrl)
    const options = overrideOptions ?? getApiOptions(apiUrl)
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

  private setSpawn(spawn: boolean = true) {
    this._isSpawned = spawn
  }

  private setUrl(apiUrl: string) {
    this._apiUrl = apiUrl
  }

  get isDead(): boolean {
    return this.isConnected === false
  }

  get url(): string {
    return this._apiUrl
  }
}

export default InstantApi
