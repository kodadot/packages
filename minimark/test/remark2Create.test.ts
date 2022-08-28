import { createInteraction } from "../src/rmrk/v2/create";
import { InteractionV2 } from "../src/rmrk/v2/constants";
import { NFT_ID, RESADD_EVENT } from "./mock";


describe('RMRK2 Create Interaction', () => {
    it('should create Interaction', () => {
        expect(() => createInteraction(InteractionV2.BURN, '2.0.0', '', 'no_meta')).toThrow()
        expect(createInteraction(InteractionV2.BURN, '2.0.0', NFT_ID, '')).toBe(
            'RMRK::BURN::2.0.0::5105000-0aff6865bed3a66b-VALHELLO-POTION_HEAL-00000001'
        )
        // with meta
        expect(createInteraction(InteractionV2.SETPRIORITY, '2.0.0', NFT_ID, 'bar,foo,baz'))
            .toBe(`RMRK::SETPRIORITY::2.0.0::${NFT_ID}::bar,foo,baz`)
        // with json_field
        expect(createInteraction(InteractionV2.RESADD, '2.0.0', NFT_ID, '%7B%22id%22%3A%22V1i6B%22%2C%22src%22%3A%22hash-of-metadata-guest-bird-art-with-jetpack%22%2C%22metadata%22%3A%22hash-of-metadata-with-credits%22%7D'))
            .toBe(RESADD_EVENT)
    });

    it('should create Mint Interaction', () => {

    });
});