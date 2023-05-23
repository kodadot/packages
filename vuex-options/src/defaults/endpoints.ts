// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

const KUSAMA_ENDPOINTS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (Parity)',
    value: 'wss://kusama-rpc.polkadot.io'
  },
  {
    info: 'kusama',
    text: 'Kusama (RadiumBlock)',
    value: 'wss://kusama.public.curie.radiumblock.co/ws'
  },
  {
    info: 'kusama',
    text: 'Kusama (IBP-GeoDNS1)',
    value: 'wss://rpc.ibp.network/kusama'
  },
  {
    info: 'kusama',
    text: 'Kusama (IBP-GeoDNS2)',
    value: 'wss://rpc.dotters.network/kusama'
  },
  {
    info: 'kusama',
    text: 'Kusama (Automata 1RPC)',
    value: 'wss://1rpc.io/ksm'
  },
  {
    info: 'kusama',
    text: 'Kusama (OnFinality)',
    value: 'wss://kusama.api.onfinality.io/public-ws'
  },
  {
    info: 'kusama',
    text: 'Kusama (Dwellir)',
    value: 'wss://kusama-rpc.dwellir.com'
  }
]

const POLKADOT_ENDPOINTS: Option[] = [
  {
    info: 'polkadot',
    text: 'Polkadot (Parity)',
    value: 'wss://rpc.polkadot.io'
  }
]

export const ENDPOINTS: Option[] = [
  {
    info: 'basilisk',
    text: 'Basilisk (Dwellir)',
    value: 'wss://basilisk-rpc.dwellir.com'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (HydraDX)',
    value: 'wss://rpc.basilisk.cloud'
  },
  ...KUSAMA_ENDPOINTS,
  ...KUSAMA_ENDPOINTS.map(({ info: _info, ...rest }) => ({
    info: 'rmrk',
    ...rest
  })),
  {
    info: 'statemine',
    text: 'Statemine (Parity)',
    value: 'wss://statemine-rpc.polkadot.io'
  },
  {
    info: 'statemine',
    text: 'Statemine (OnFinality)',
    value: 'wss://statemine.api.onfinality.io/public-ws'
  },
  {
    info: 'statemine',
    text: 'Statemine (RadiumBlock)',
    value: 'wss://statemine.api.onfinality.io/public-ws'
  },
  {
    info: 'statemine',
    text: 'Statemine (RadiumBlock)',
    value: 'wss://statemine.api.onfinality.io/public-ws'
  },
  ...POLKADOT_ENDPOINTS,
  {
    info: 'snek',
    text: 'Snek Rococo (HydraDX)',
    value: 'wss://rococo-basilisk-rpc.hydration.dev'
  },
  {
    info: 'moonriver',
    text: 'Moonriver (Moonbeam)',
    value: 'wss://wss.api.moonriver.moonbeam.network'
  },
  {
    info: 'moonbeam',
    text: 'Moonbeam (Moonbeam)',
    value: 'wss://public-rpc.pinknode.io/moonbeam'
  },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  },
  {
    info: 'parachain',
    text: 'Local Parachain Node (Own, 127.0.0.1:9988)',
    value: 'ws://127.0.0.1:9988/'
  }
]

export const ENDPOINT_DEFAULT: string | number =
  KUSAMA_ENDPOINTS[0].value || 'wss://kusama-rpc.polkadot.io'
