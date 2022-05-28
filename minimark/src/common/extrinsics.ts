import { ApiPromise } from '@polkadot/api'
import { Extrinsic, ExtrinsicFunction } from './types'

export const asSystemRemark = (api: ApiPromise, remark: string): Extrinsic => {
  return api.tx.system.remark(remark)
}

export const asUtilityBatch = (api: ApiPromise, calls: Extrinsic[]): Extrinsic => {
  return api.tx.utility.batchAll(calls)
}

export const mapAsSystemRemark = (api: ApiPromise): ExtrinsicFunction<string> => (remark: string): Extrinsic => asSystemRemark(api, remark)
