// https://polkadot.js.org/docs/api/FAQ#since-upgrading-to-the-7x-series-typescript-augmentation-is-missing
// import '@polkadot/api-augment'

import InstantApi from './instantapi'
import ApiFactory from './ApiFactory'
import onApiConnect from './onApiConnect'
import { useApi } from './useApi'
export * from './common/extrinsics'
export * from './common/query'
export * from './types'

export { InstantApi, ApiFactory, onApiConnect, useApi }
