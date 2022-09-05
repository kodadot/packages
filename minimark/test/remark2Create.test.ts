import { createInteraction, createCollection, createNFTV2 } from "../src/rmrk/v2/create";
import { InteractionV2 } from "../src/rmrk/v2/constants";
import { CreatedCollectionV2 } from "../src/rmrk/v2/types";
import m, { Test } from "./rmrk2Mock";



describe('RMRK2 Create Interaction', () => {
    function runInteractionTest(action: InteractionV2, mock: Test) {
        expect(createInteraction({
            action,
            payload: mock.payload
        })).toBe(mock.input)
    }

    it('should create ACCEPT interaction', () => {
        runInteractionTest(InteractionV2.ACCEPT, m.acceptTest)
    });
    it('should create BASE interaction', () => {
        runInteractionTest(InteractionV2.BASE, m.baseTest)
    });
    it('should create BURN interaction', () => {
        runInteractionTest(InteractionV2.BURN, m.burnTest)
    });
    it('should create BUY interaction', () => {
        runInteractionTest(InteractionV2.BUY, m.buyTest)
        runInteractionTest(InteractionV2.BUY, m.buyTestWithRecipient)
    });
    it('should create CHANGEISSUER interaction', () => {
        runInteractionTest(InteractionV2.CHANGEISSUER, m.changeissuerTest)
    });
    it('should create CREATE interaction', () => {
        runInteractionTest(InteractionV2.CREATE, m.createTest)
    });

    it('should create EMOTE interaction', () => {
        runInteractionTest(InteractionV2.EMOTE, m.emoteTest)
        runInteractionTest(InteractionV2.EMOTE, m.emoteTestWithAccount)
    });

    it('should create EQUIP interaction', () => {
        runInteractionTest(InteractionV2.EQUIP, m.equipTest)
    });

    it('should create EQUIPPABLE interaction', () => {
        runInteractionTest(InteractionV2.EQUIPPABLE, m.equippableTest)
    });

    it('should create LIST interaction ', () => {
        runInteractionTest(InteractionV2.LIST, m.listTest)
        runInteractionTest(InteractionV2.LIST, m.listTestWithCancel)
    });

    it('should create MINT interaction', () => {
        runInteractionTest(InteractionV2.MINT, m.mintTest)
    });
    it('should create RESADD interaction', () => {
        runInteractionTest(InteractionV2.RESADD, m.resAddTest)
    });
    it('should create SEND interaction', () => {
        runInteractionTest(InteractionV2.SEND, m.sendTest)
    });
    it('should create SETPROPERTY interaction', () => {
        runInteractionTest(InteractionV2.SETPROPERTY, m.setPropertyTest)
    });
    it('should create SETPRIORITY interaction', () => {
        runInteractionTest(InteractionV2.SETPRIORITY, m.setPriorityTest)
    });
    it('should create THEMEADD interaction', () => {
        runInteractionTest(InteractionV2.THEMEADD, m.themeAddTest)
    });

});

describe('RMRK2 Create Collection', () => {
    const collectionProps = {
        "max": 100,
        "issuer": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
        "symbol": "DLEP",
        "id": "0aff6865bed3a66b-DLEP",
        "metadata": "ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j"
    }
    it('should throw Error for wrong parameter', () => {
        expect(createCollection)
            .toThrowError(new Error("Missing Property"))
        // max checking
        expect(() => createCollection({ ...collectionProps, max: -1 })).toThrow()
    });

    it('should return created Collection', () => {
        expect(createCollection(collectionProps)).toEqual({
            max: 100,
            issuer: collectionProps.issuer,
            symbol: 'DLEP',
            id: "0AFF686563BED3A66B-DLEP",
            metadata: 'ipfs://ipfs/QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j'
        })
    });

});

describe('RMRK2 Create NFT', () => {

});