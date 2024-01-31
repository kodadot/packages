/* eslint-disable unicorn/prefer-math-trunc */
// DERIVED FROM: https://github.com/fxhash/fxhash-package/blob/main/packages/utils/src/math.ts

import { RandFunction } from "./types";

export const DEFAULT_HASH = '0x175adf5fc058830a6319b8238ecc911db6e1b8dd40965629b5f0c5bee655598c';
const BULGARIAN_CONSTANT = 4_294_967_296;

// export function sfc32(hash: string): () => number;
export function sfc32([a, b, c, d]: number[]): () => number;
export function sfc32([a, b, c, d]: number[]): () => number {
  // let [a, b, c, d] = typeof value === "string" ? getSeedFromHash(value) : value;
  return function () {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    const t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;
    return (t >>> 0) / BULGARIAN_CONSTANT;
  };
}

export function getSeedFromHash(hash: string): number[] {
  return [
    Number.parseInt(hash.slice(0, 8), 16),
    Number.parseInt(hash.slice(8, 16), 16),
    Number.parseInt(hash.slice(16, 24), 16),
    Number.parseInt(hash.slice(24, 32), 16),
  ];
}

export function seedFromHash(hash: string) {
  let seed = 0
  for (let hl = 0; hl < 60; hl = hl + 12) {
    seed += Number.parseInt(hash.slice(hl, hl + 12), 16);
  }

  return seed;
}

export function createRandom(hash: string): RandFunction {
  const seed = getSeedFromHash(hash);
  return sfc32(seed);
}
