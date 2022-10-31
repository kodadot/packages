// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js'

import { CRYPTOS, CRYPTOS_ETH, CRYPTOS_LEDGER } from './crypto.js'
import { ENDPOINT_DEFAULT, ENDPOINTS } from './endpoints.js'
import { LEDGER_CONN, LEDGER_CONN_DEFAULT } from './ledger.js'
import { PREFIX_DEFAULT, PREFIXES } from './ss58.js'
import { INDEXER_DEFAULT, INDEXERS } from './indexers.js'
import {
  PREFIXES as URL_PREFIXES,
  PREFIX_DEFAULT as URL_PREFIX_DEFAULT
} from './prefixes.js'
import {
  ICON_DEFAULT,
  ICON_DEFAULT_HOST,
  ICONS,
  PAGINATION_DEFAULT,
  PAGINATIONS,
  SHOW_DEFAULT,
  SHOW_OPTIONS,
  DISPLAY_DEFAULT,
  DISPLAYS,
  UITHEME_DEFAULT,
  UITHEMES,
  CHANGE_DEFAULT,
  CHANGE_OPTIONS
} from './ui'
import chains from './chains.js'

const CAMERA_DEFAULT = 'off'

const CAMERA: Option[] = [
  {
    info: 'on',
    text: 'Allow camera access',
    value: 'on'
  },
  {
    info: 'off',
    text: 'Do not allow camera access',
    value: 'off'
  }
]

const LANGUAGE_DEFAULT = 'default'

const LOCKING_DEFAULT = 'session'

const LOCKING: Option[] = [
  {
    info: 'session',
    text: 'Once per session',
    value: 'session'
  },
  {
    info: 'tx',
    text: 'On each transaction',
    value: 'tx'
  }
]

export {
  CAMERA_DEFAULT,
  CAMERA,
  CRYPTOS,
  CRYPTOS_ETH,
  CRYPTOS_LEDGER,
  ENDPOINT_DEFAULT,
  ENDPOINTS,
  ICON_DEFAULT,
  ICON_DEFAULT_HOST,
  ICONS,
  LANGUAGE_DEFAULT,
  LEDGER_CONN_DEFAULT,
  LEDGER_CONN,
  LOCKING_DEFAULT,
  LOCKING,
  PREFIX_DEFAULT,
  PREFIXES,
  PAGINATION_DEFAULT,
  PAGINATIONS,
  SHOW_DEFAULT,
  SHOW_OPTIONS,
  DISPLAY_DEFAULT,
  DISPLAYS,
  UITHEME_DEFAULT,
  UITHEMES,
  INDEXER_DEFAULT,
  INDEXERS,
  URL_PREFIX_DEFAULT,
  URL_PREFIXES,
  CHANGE_DEFAULT,
  CHANGE_OPTIONS,
  chains
}
