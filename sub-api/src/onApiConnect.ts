import type { ApiPromise } from '@polkadot/api'
import ApiFactory from './ApiFactory'
export type ApiCallbackFunction = (api: ApiPromise) => void
export type ErrorCallbackFunction = (err: Error) => void

async function onApiConnect(prefixOrUrl: string, callback: ApiCallbackFunction, onError?: ErrorCallbackFunction): Promise<void> {
  try {
    const api = await ApiFactory.useApiInstance(prefixOrUrl)
    callback(api)
  } catch (err) {
    // console.log('err', err)
    if (onError) {
      onError(err)
    } else {
      console.error(err)
      // throw err
    }
  }
}

export default onApiConnect
