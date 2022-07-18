import type { ApiPromise } from '@polkadot/api'

// TODO: Promise<Option<PalletIdentityRegistration>> is correct
export const identityOf = (api: ApiPromise, address: string): Promise<any> => {
  return api.query.identity.identityOf(address)
}

export const balanceOf = (api: ApiPromise, address: string): Promise<string> => {
  return api.derive.balances.all(address).then(({ availableBalance }) => availableBalance.toString())
}

// export const currentRandomness = (api: ApiPromise): Promise<number[]> => {
//   return api.query.babe.randomness().then(random => Array.from(random as U8aFixed))
// }
