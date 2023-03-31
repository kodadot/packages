// Copyright 2021 @kodadot authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

export const INDEXERS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (rubick)',
    value: 'https://squid.subsquid.io/rubick/graphql'
  },
  {
    info: 'rmrk2',
    text: 'RMRK 2.0 (marck)',
    value: 'https://squid.subsquid.io/marck/graphql'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (snekk)',
    value: 'https://squid.subsquid.io/snekk/v/005/graphql'
  },
  {
    info: 'snek',
    text: 'Snek (snekk)',
    value: 'https://squid.subsquid.io/snekk/v/004/graphql'
  },
  {
    info: 'moonriver',
    text: 'Moonbeam (antick)',
    value: 'http://localhost:4350/graphql'
  },
  {
    info: 'moonbeam',
    text: 'Moonriver (click)',
    value: 'http://localhost:4350/graphql'
  },
  {
    info: 'local',
    text: 'Local Indexer (:4350)',
    value: 'http://127.0.0.1:4350/graphql'
  },
  {
    info: 'local',
    text: 'Local Indexer (:3000)',
    value: 'http://127.0.0.1:3000'
  }
]

export const INDEXER_DEFAULT: string = INDEXERS[0].value as string || 'https://api.subquery.network/sq/vikiival/magick'
