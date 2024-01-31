// ORIGINAL FROM: https://docs.prohibition.art/deterministic-output

import { getSeedFromHash, sfc32 } from './math'

/* eslint-disable unicorn/prefer-math-trunc */
export class Random {
  // Define the types for the class properties
  private useA: boolean;
  private prngA: () => number;
  private prngB: () => number;

  // Define the sfc32 function in the outer scope
  private static sfc32: (uint128Hex: string) => () => number = function (uint128Hex: string) {
    const [a,b,c,d] = getSeedFromHash(uint128Hex);
    return sfc32([a, b, c, d]);
  };

  constructor(tokenData: { hash: string }) {
    this.useA = false;

    // seed prngA with first half of tokenData.hash
    this.prngA = Random.sfc32(tokenData.hash.slice(2, 34));
    // seed prngB with second half of tokenData.hash
    this.prngB = Random.sfc32(tokenData.hash.slice(34, 66));

    // Warm up the PRNGs
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }

  // random number between 0 (inclusive) and 1 (exclusive)
  random_dec(): number {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }

  // random number between a (inclusive) and b (exclusive)
  random_num(a: number, b: number): number {
    return a + (b - a) * this.random_dec();
  }

  // random integer between a (inclusive) and b (inclusive)
  // requires a < b for proper probability distribution
  random_int(a: number, b: number): number {
    return Math.floor(this.random_num(a, b + 1));
  }

  // random boolean with p as percent likelihood of true
  random_bool(p: number): boolean {
    return this.random_dec() < p;
  }

  // random value in an array of items
  random_choice<T>(list: T[]): T {
    return list[this.random_int(0, list.length - 1)];
  }
}
