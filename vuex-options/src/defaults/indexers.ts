// Copyright 2021 @kodadot authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

export const INDEXERS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (magick auto-balanced)',
    value: 'https://kodadot.api.subquery.network'
  },
  {
    info: 'kusama',
    text: 'Kusama (magick EU)',
    value: 'https://sz.api.subquery.network/sq/vikiival/magick'
  },
  {
    info: 'kusama',
    text: 'Kusama (magick)',
    value: 'https://api.subquery.network/sq/vikiival/magick'
  },
  {
    info: 'statemine',
    text: 'Statemine (unique)',
    value: 'https://api.subquery.network/sq/kodadot/unique'
  },
  {
    info: 'westend',
    text: 'Westend (magick-west)',
    value: 'https://api.subquery.network/sq/vikiival/magick-west'
  },
  {
    info: 'westmint',
    text: 'Westmint (unique-west)',
    value: 'https://api.subquery.network/sq/vikiival/unique-west'
  },
  {
    info: 'moonriver',
    text: 'Moonsama (click)',
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
];

export const INDEXER_DEFAULT: string = INDEXERS[0].value as string || 'https://api.subquery.network/sq/vikiival/magick';

