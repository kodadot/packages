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
    info: 'westend',
    text: 'RMRK (Westend)',
    value: 'westend'
  },
  {
    info: 'statemine',
    text: 'Statemine',
    value: 'statemine'
  },
  {
    info: 'westmint',
    text: 'Westmint',
    value: 'westmint'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (Sandbox)',
    value: 'bsx'
  },
  {
    info: 'snek',
    text: 'Snek (Rococo)',
    value: 'snek'
  },
  {
    info: 'moonriver',
    text: 'Moonsama (read-only)',
    value: 'moonsama'
  }
]
