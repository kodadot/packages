import unwrapV2 from '../src/rmrk/v2/unwrap'
import { base_json, CREATE_EVENT } from './mock';

type TestingSet = {
    input: string
    type: string
    expected: any
}

function singleTest(item: TestingSet) {
    const result = unwrapV2(item.input)
    expect(result.interaction).toBe(item.type)
    expect(result.version).toBe('2.0.0')
    const { value } = result
    expect(value).toStrictEqual(item.expected)
}

describe('MINIMARK::RMRK:2.0.0', () => {
    it('should LOCK', () => {
        const test: TestingSet = {
            type: 'LOCK',
            input: 'RMRK::LOCK::2.0.0::0aff6865bed3a66b-DLEP',
            expected: {
                id: "0aff6865bed3a66b-DLEP",
                value: undefined,
            }
        }
        singleTest(test)
    });
    it('should ACCEPT', () => {
        const test: TestingSet = {
            type: 'ACCEPT',
            input: 'RMRK::ACCEPT::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::RES::V1i6B',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                value: 'RES'
            }
        }
        singleTest(test)
    });

    it('should BASE', () => {
        const test: TestingSet = {
            type: 'BASE',
            input: `RMRK::BASE::2.0.0::${JSON.stringify(base_json)}`,
            expected: {
                value: base_json
            }
        }
        singleTest(test)
    });

    it('should EQUIP', () => {
        const test: TestingSet = {
            type: 'EQUIP',
            input: 'RMRK::EQUIP::2.0.0::5105000-0aff6865bed3a66b-DLEP-ARMOR-00000001::base_1.slot_1',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-ARMOR-00000001',
                value: 'base_1.slot_1'
            }
        }
        singleTest(test)
    });

    it('should EQUIPPABLE', () => {
        const test: TestingSet = {
            type: 'EQUIPPABLE',
            input: 'rmrk::EQUIPPABLE::2.0.0::base-575878273-kanaria_epic_birds::wing_slot_1::*',
            expected: {
                id: 'base-575878273-kanaria_epic_birds',
                slot: 'wing_slot_1',
                value: '*',
            }
        }
        singleTest(test)
    });

    it('should RESADD', () => {
        const test: TestingSet = {
            type: 'RESADD',
            input: 'RMRK::RESADD::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::%7B%22id%22%3A%22V1i6B%22%2C%22src%22%3A%22hash-of-metadata-guest-bird-art-with-jetpack%22%2C%22metadata%22%3A%22hash-of-metadata-with-credits%22%7D',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                value: {
                    "id": "V1i6B",
                    "src": "hash-of-metadata-guest-bird-art-with-jetpack",
                    "metadata": "hash-of-metadata-with-credits",
                },
                replace: undefined
            }
        }
        //TODO: find example that has replace field
        singleTest(test)
    });

    it('should SETPRIORITY', () => {
        const test: TestingSet = {
            type: 'SETPRIORITY',
            input: 'RMRK::SETPRIORITY::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::bar,foo,baz',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                value: "bar,foo,baz",
            }
        }
        singleTest(test)
    });

    it('should SETPROPERTY', () => {
        const test: TestingSet = {
            type: 'SETPROPERTY',
            input: 'RMRK::SETPROPERTY::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::color::red',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                name: 'color',
                value: 'red',
            }
        }
        singleTest(test)
    });

    it('should THEMEADD', () => {
        const test: TestingSet = {
            type: 'THEMEADD',
            input: 'RMRK::THEMEADD::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::good::%7B%22primary_color%22%3A%22%2300ff00%22%7D',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                name: 'good',
                value: {
                    "primary_color": "#00ff00"
                },
            }
        }
        singleTest(test)
    });
});

describe('RMRK:2.0.0 Existing Interactions', () => {
    it('should BUY', () => {
        const test: TestingSet = {
            type: 'BUY',
            input: 'rmrk::BUY::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
            expected: {
                id: '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
                value: undefined,
            }
        }
        const test2: TestingSet = {
            type: 'BUY',
            input: 'rmrk::BUY::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001::recipient_id',
            expected: {
                id: '5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001',
                value: 'recipient_id',
            }
        }

        singleTest(test)
        singleTest(test2)
    });

    it('should EMOTE', () => {
        const test: TestingSet = {
            type: 'EMOTE',
            input: 'RMRK::EMOTE::2.0.0::RMRK1::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::1F389',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                value: '1F389',
                namespace: 'RMRK1'
            }
        }
        singleTest(test)
        // Emoting on an account
        const test2: TestingSet = {
            type: 'EMOTE',
            input: 'RMRK::EMOTE::2.0.0::PUBKEY::0xe81f67c2def10f4cc1f43b0e207921210ff83747eb354ad653bbd2c0f0466f10::1F389',
            expected: {
                id: '0xe81f67c2def10f4cc1f43b0e207921210ff83747eb354ad653bbd2c0f0466f10',
                value: '1F389',
                namespace: 'PUBKEY'
            }
        }
        singleTest(test2)
    })

    it('should SEND', () => {
        singleTest({
            type: 'SEND',
            input: 'RMRK::SEND::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::H9eSvWe34vQDJAWckeTHWSqSChRat8bgKHG39GC1fjvEm7y',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                recipient: 'H9eSvWe34vQDJAWckeTHWSqSChRat8bgKHG39GC1fjvEm7y',
            }
        })

    })

    it('should LIST', () => {
        singleTest({
            type: 'LIST',
            input: 'RMRK::LIST::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::10000000000',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                price: '10000000000'
            }
        })
        // cancel case
        singleTest({
            type: 'LIST',
            input: 'RMRK::LIST::2.0.0::5105000-0aff6865bed3a66b-DLEP-DL15-00000001::0',
            expected: {
                id: '5105000-0aff6865bed3a66b-DLEP-DL15-00000001',
                price: '0'
            }
        })
    })

    it('should CHANGEISSUER', () => {
        singleTest({
            type: 'CHANGEISSUER',
            input: 'RMRK::CHANGEISSUER::2.0.0::0aff6865bed3a66b-DLEP::HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT',
            expected: {
                id: '0aff6865bed3a66b-DLEP',
                newissuer: 'HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT'
            }
        })
    })


});

describe('RMRK:2.0.0 backward compatible', () => {
    it('should CREATE', () => {
        singleTest({
            type: 'CREATE',
            input: CREATE_EVENT,
            expected: {
                value: {
                    "max": 100,
                    "issuer": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
                    "symbol": "DLEP",
                    "id": "0aff6865bed3a66b-DLEP",
                    "metadata": "ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j"
                }
            }
        })

    });

});