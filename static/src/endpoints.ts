import { Config } from './types'

type WS_URL = `wss://${string}` | `ws://${string}`

export const ENDPOINT_MAP: Config<WS_URL> = {
  bsx: 'wss://basilisk-rpc.dwellir.com',
  glmr: 'wss://public-rpc.pinknode.io/moonbeam',
  ksm: 'wss://kusama-rpc.dwellir.com',
  movr: 'wss://wss.api.moonriver.moonbeam.network',
  rmrk2: 'wss://kusama-rpc.dwellir.com',
  snek: 'wss://rococo-basilisk-rpc.hydration.dev',
}

// export const ALTERNATIVE_ENDPOINT_MAP: Config<WS_URL[]> = {}
