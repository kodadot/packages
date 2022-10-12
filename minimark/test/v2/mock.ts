import { wrapToString } from '../../src/utils'

export const BaseJson = {
  symbol: 'kanaria_superbird',
  type: 'svg',
  parts: [
    {
      id: 'bg',
      src: 'ipfs://ipfs/hash',
      thumb: 'ipfs://ipfs/hash',
      type: 'slot',
      equippable: ['collection_1', 'collection_2'],
      z: 3
    },
    {
      id: 'gem_1',
      src: 'ipfs://ipfs/hash',
      type: 'fixed',
      z: 4
    },
    {
      id: 'wing_1_back',
      src: 'ipfs://ipfs/hash',
      metadata: 'ipfs://ipfs/hash'
    },
    {
      id: 'wing_1_front',
      metadata: 'ipfs://ipfs/hash2'
    }
  ]
}

export const CREATE_EVENT = 'RMRK::CREATE::2.0.0::%7B%22max%22%3A100%2C%22issuer%22%3A%22CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp%22%2C%22symbol%22%3A%22DLEP%22%2C%22id%22%3A%220aff6865bed3a66b-DLEP%22%2C%22metadata%22%3A%22ipfs%3A%2F%2Fipfs%2FQmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j%22%7D'
export const MINT_EVENT = 'RMRK::MINT::2.0.0::%7B%22collection%22%3A%220aff6865bed3a66b-DLEP%22%2C%22symbol%22%3A%22DL15%22%2C%22transferable%22%3A1%2C%22sn%22%3A%2200000001%22%2C%22metadata%22%3A%22ipfs%3A%2F%2Fipfs%2FQmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4%22%7D'
export const BURN_EVENT = 'RMRK::BURN::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001'

export type Test = {
    type: string
    input: string
    payload: any
}

export const lockTest = {
  type: 'LOCK',
  input: 'RMRK::LOCK::2.0.0::0aff6865bed3a66b-DLEP',
  payload: {
    id: '0aff6865bed3a66b-DLEP'
  }
}

export const acceptTest = {
  type: 'ACCEPT',
  input: 'RMRK::ACCEPT::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::RES::V1i6B',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    entity_type: 'RES',
    entity_id: 'V1i6B'
  }
}

export const baseTest = {
  type: 'BASE',
  input: `RMRK::BASE::2.0.0::${wrapToString(BaseJson)}`,
  payload: {
    value: BaseJson
  }
}

export const equipTest = {
  type: 'EQUIP',
  input: 'RMRK::EQUIP::2.0.0::5105000-0aff6865bed3a66b-DLEP-ARMOR-00000001::base_1.slot_1',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-ARMOR-00000001',
    baseslot: 'base_1.slot_1'
  }
}

export const equippableTest = {
  type: 'EQUIPPABLE',
  input: 'RMRK::EQUIPPABLE::2.0.0::base-575878273-kanaria_epic_birds::wing_slot_1::*',
  payload: {
    id: 'base-575878273-kanaria_epic_birds',
    slot: 'wing_slot_1',
    value: '*'
  }
}

export const resAddTest = {
  type: 'RESADD',
  input: 'RMRK::RESADD::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::%7B%22id%22%3A%22V1i6B%22%2C%22src%22%3A%22hash-of-metadata-guest-bird-art-with-jetpack%22%2C%22metadata%22%3A%22hash-of-metadata-with-credits%22%7D',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    value: {
      id: 'V1i6B',
      src: 'hash-of-metadata-guest-bird-art-with-jetpack',
      metadata: 'hash-of-metadata-with-credits'
    },
    replace: undefined
  }
}

export const setPriorityTest = {
  type: 'SETPRIORITY',
  input: 'RMRK::SETPRIORITY::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::bar,foo,baz',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    value: 'bar,foo,baz'
  }
}

export const setPropertyTest = {
  type: 'SETPROPERTY',
  input: 'RMRK::SETPROPERTY::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::color::red',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    name: 'color',
    value: 'red'
  }
}
export const themeAddTest = {
  type: 'THEMEADD',
  input: 'RMRK::THEMEADD::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::good::%7B%22primary_color%22%3A%22%2300ff00%22%7D',
  payload: {
    base_id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    name: 'good',
    value: {
      primary_color: '#00ff00'
    }
  }
}
export const buyTest = {
  type: 'BUY',
  input: 'RMRK::BUY::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
  payload: {
    id: '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
    recipient: undefined
  }
}
export const buyTestWithRecipient = {
  type: 'BUY',
  input: 'RMRK::BUY::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001::recipient_id',
  payload: {
    id: '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
    recipient: 'recipient_id'
  }
}

export const emoteTest = {
  type: 'EMOTE',
  input: 'RMRK::EMOTE::2.0.0::RMRK1::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::1F389',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    emotion: '1F389',
    namespace: 'RMRK1'
  }
}
// Emoting on an account
export const emoteTestWithAccount = {
  type: 'EMOTE',
  input: 'RMRK::EMOTE::2.0.0::PUBKEY::0xe81f67c2def10f4cc1f43b0e207921210ff83747eb354ad653bbd2c0f0466f10::1F389',
  payload: {
    id: '0xe81f67c2def10f4cc1f43b0e207921210ff83747eb354ad653bbd2c0f0466f10',
    emotion: '1F389',
    namespace: 'PUBKEY'
  }
}

export const sendTest = {
  type: 'SEND',
  input: 'RMRK::SEND::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::H9eSvWe34vQDJAWckeTHWSqSChRat8bgKHG39GC1fjvEm7y',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    recipient: 'H9eSvWe34vQDJAWckeTHWSqSChRat8bgKHG39GC1fjvEm7y'
  }
}
export const listTest = {
  type: 'LIST',
  input: 'RMRK::LIST::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::10000000000',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    price: '10000000000'
  }
}
// cancel case
export const listTestWithCancel = ({
  type: 'LIST',
  input: 'RMRK::LIST::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::0',
  payload: {
    id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
    price: '0'
  }
})

export const changeissuerTest = {
  type: 'CHANGEISSUER',
  input: 'RMRK::CHANGEISSUER::2.0.0::0aff6865bed3a66b-DLEP::HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT',
  payload: {
    id: '0aff6865bed3a66b-DLEP',
    newissuer: 'HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT'
  }
}

export const createTest = {
  type: 'CREATE',
  input: CREATE_EVENT,
  payload: {
    value: {
      max: 100,
      issuer: 'CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp',
      symbol: 'DLEP',
      id: '0aff6865bed3a66b-DLEP',
      metadata: 'ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j'
    }
  }
}

export const mintTest = {
  type: 'MINT',
  input: MINT_EVENT,
  payload: {
    value: {
      collection: '0aff6865bed3a66b-DLEP',
      symbol: 'DL15',
      transferable: 1,
      sn: '00000001',
      metadata: 'ipfs://ipfs/QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4'
    },
    recipient: undefined
  }
}

export const burnTest = {
  type: 'BURN',
  input: BURN_EVENT,
  payload: {
    id: '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001'
  }
}

export default {
  burnTest,
  lockTest,
  acceptTest,
  baseTest,
  equipTest,
  equippableTest,
  resAddTest,
  setPriorityTest,
  setPropertyTest,
  themeAddTest,
  buyTest,
  buyTestWithRecipient,
  emoteTest,
  emoteTestWithAccount,
  sendTest,
  listTest,
  listTestWithCancel,
  changeissuerTest,
  createTest,
  mintTest
}
