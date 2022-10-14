import type { ApiPromise } from '@polkadot/api'
import { Extrinsic } from '../types'

export const asUtilityBatch = (api: ApiPromise, calls: Extrinsic[]): Extrinsic => {
  return api.tx.utility.batchAll(calls)
}

// function asBalanceTransfer
export const asBalanceTransfer = (api: ApiPromise, to: string, amount: string | bigint | number): Extrinsic => {
  return api.tx.balances.transfer(to, amount)
}
