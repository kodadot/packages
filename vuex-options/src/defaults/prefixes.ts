// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

export const PREFIX_DEFAULT = 'rmrk'

export const PREFIXES: Option[] = [
  {
    info: 'kusama',
    text: 'RMRK (Kusama)',
    value: 'rmrk'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (Kusama)',
    value: 'bsx'
  },
  {
    info: 'snek',
    text: 'Snek (Rococo)',
    value: 'snek'
  },
  {
    info: 'moonriver',
    text: 'Moonriver (read-only)',
    value: 'movr'
  }
]
