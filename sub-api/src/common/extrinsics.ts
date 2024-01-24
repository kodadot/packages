import type { ApiPromise } from '@polkadot/api'
import { Extrinsic } from '../types'

export const asUtilityBatch = (api: ApiPromise, calls: Extrinsic[]): Extrinsic => {
  return api.tx.utility.batchAll(calls)
}

// DEV: transfer was deprecated
// https://github.com/paritytech/substrate/blob/master/frame/balances/src/lib.rs#L735
export const asBalanceTransfer = (api: ApiPromise, to: string, amount: string | bigint | number): Extrinsic => {
  return api.tx.balances.transferAllowDeath(to, amount)
}

export const asBalanceTransferAlive = (api: ApiPromise, to: string, amount: string | bigint | number): Extrinsic => {
  return api.tx.balances.transferKeepAlive(to, amount)
}

export const asBalanceTransferAll = (api: ApiPromise, to: string): Extrinsic => {
  return api.tx.balances.transferAll(to, false)
}
