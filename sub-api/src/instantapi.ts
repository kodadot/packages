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
  // private _initiatedAt: number

  constructor(apiUrl: string, overrideOptions?: ApiExtension) {
    const provider = asWsProvider(apiUrl)
    const options = overrideOptions ?? getApiOptions(apiUrl)
    super({ provider, ...options, throwOnConnect: true })
    this.setUrl(apiUrl)
    // this._initiatedAt = Date.now()
    this.once('disconnected', () => {
      console.warn('[KODADOT::SUBAPI] WARN: Unable to init api with apiUrl', apiUrl)
      this.detach()
    })
  }

  public getInstance(): Promise<ApiPromise> {
    // this.revive()
    return this.isReadyOrError
    // TODO: better way to do this?
    // .then(a => a, () => {
    //   throw new Error('Unable to connect to api')
    // })
  }

  get instance(): Promise<ApiPromise> {
    return this.isReadyOrError
  }

  private revive() {
    if (this.isDead) {
      console.warn('[KODADOT::SUBAPI] WARN: Reviving api')
      // TODO: possibly needs to await otheriwse yolo
      this.connect()
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
