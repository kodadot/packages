import { InteractionV2Type } from "./types";
import { createInteraction as createInteractionV1 } from "../create";
// import { InteractionV2, } from "./constants";

type createInteractionProps = (
    action: InteractionV2Type,
    version: '2.0.0',
    objectId: string,
    meta?: string,
) => string

export const createInteraction: createInteractionProps = (action, version, objectId, meta) => {
    return createInteractionV1(action, version, objectId, meta || '')
}

export const createMintInteraction = () => {

}

export const createNFT = () => {}

export const createCollection = () => {}

export const createMultipleNFT = () => {}
