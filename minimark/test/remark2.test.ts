import unwrapV2 from '../src/rmrk/v2/unwrap'
import { base_json } from './mock';

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

describe.skip('MINIMARK::RMRK:2.0.0', () => {
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

    it.skip('should SEND', () => {

    })

    it.skip('should LIST', () => {

    })

    it.skip('should EMOTE', () => {

    })
    
});