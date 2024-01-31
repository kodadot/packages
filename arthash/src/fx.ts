// https://github.com/fxhash/fxhash-boilerplate/blob/56944e2fb9564336bde16afca41d352f13e46849/fxhash.js

import { DEFAULT_HASH, createRandom } from './math'
import {
  FxFeatures,
  FxHashApi,
  RandFunction
} from "./types"
import { preview as postPreview } from "./utils"

export type FxHashExecutionContext = "standalone" | "capture" | "minting";

export class FxHash implements FxHashApi {
  hash!: string;
  minter!: string;
  iteration!: number;
  rand!: RandFunction;
  randminter!: RandFunction;
  context!: FxHashExecutionContext;
  isPreview!: boolean;
  private _features: FxFeatures = {};

  constructor(window: Window) {
    const search = new URLSearchParams(window.location.search);
    this.hash = search.get("hash") || DEFAULT_HASH;
    this.minter = search.get("minter") || "";
    this.iteration = Number.parseInt(search.get("iteration") || "0");
    // this.context = search.get("context") as FxHashExecutionContext;
    this.rand = createRandom(this.hash);
    // this.randminter = createRandom(this.minter);
  }

  preview() {
    return postPreview();
  }

  features(features: FxFeatures) {
    console.log("features", features);
  }

  getFeature(id: string) {
    return this._features[id];
  }

  getFeatures() {
    return this._features;
  }
}
