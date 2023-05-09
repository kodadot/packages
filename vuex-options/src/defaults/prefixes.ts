// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

export const PREFIX_DEFAULT = 'bsx'

export const PREFIXES: Option[] = [
  {
    info: 'basilisk',
    text: 'Basilisk',
    value: 'bsx'
  },
  {
    info: 'kusama',
    text: 'Kusama',
    value: 'rmrk'
  },
  {
    info: 'rmrk',
    text: 'RMRK2',
    value: 'ksm'
  },
  {
    info: 'statemine',
    text: 'Statemine',
    value: 'stmn'
  },
  {
    info: 'snek',
    text: 'Snek [Rococo]',
    value: 'snek'
  },
  {
    info: 'moonriver',
    text: 'Moonriver [Beta]',
    value: 'movr'
  },
  {
    info: 'moonbeam',
    text: 'Moonbeam [Beta]',
    value: 'glmr'
  }
]
