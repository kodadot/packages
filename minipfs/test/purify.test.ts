import { expect, it, describe } from 'vitest'
import { $purify } from '../src'

describe.only('Sanitize', () => {
  const tests = [
    {
      input: 'bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output:
        'https://ipfs.io/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
    },
    {
      input:
        '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output:
        'https://ipfs.io/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
    },
    {
      input:
        'ipfs://bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output:
        'https://ipfs.io/ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
    },
    {
      input:
        'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output:
        'https://ipfs.io/ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
    },
    {
      input:
        'ar://sTHc-EK1UcA32wGF1fwD-Tbuc5Cn2Bsup6bwdzUKqlE',
      output:
        'https://arweave.net/sTHc-EK1UcA32wGF1fwD-Tbuc5Cn2Bsup6bwdzUKqlE'
    }
  ]

  for (const test of tests) {
    it(test.input, () => {
      expect($purify(test.input, ['ipfs'])[0]).eq(test.output)
    })
  }
})
