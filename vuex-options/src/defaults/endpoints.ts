// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

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
  {
    info: 'kusama',
    text: 'Kusama (Dwellir)',
    value: 'wss://kusama-rpc.dwellir.com'
  },
  {
    info: 'kusama',
    text: 'Kusama (Parity)',
    value: 'wss://kusama-rpc.polkadot.io'
  },
  {
    info: 'kusama',
    text: 'Kusama (Patract Elara)',
    value: 'wss://kusama.elara.patract.io'
  },
  {
    info: 'rmrk',
    text: 'Kusama (Dwellir)',
    value: 'wss://kusama-rpc.dwellir.com'
  },
  {
    info: 'rmrk',
    text: 'Kusama (Parity)',
    value: 'wss://kusama-rpc.polkadot.io'
  },
  {
    info: 'rmrk',
    text: 'Kusama (Patract Elara)',
    value: 'wss://kusama.elara.patract.io'
  },
  {
    info: 'statemine',
    text: 'Statemine (Patract Elara)',
    value: 'wss://pub.elara.patract.io/statemine'
  },
  {
    info: 'statemine',
    text: 'Statemine (Parity)',
    value: 'wss://kusama-statemine-rpc.paritytech.net'
  },
  {
    info: 'statemine',
    text: 'Statemine (OnFinality)',
    value: 'wss://statemine.api.onfinality.io/public-ws'
  },
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

export const ENDPOINT_DEFAULT =
  ENDPOINTS[0].value || 'wss://kusama-rpc.polkadot.io'
