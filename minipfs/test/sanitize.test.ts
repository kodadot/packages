import { expect, it, describe } from 'vitest'
import { sanitize } from '../src'

describe('Sanitize', () => {
  const tests = [
    {
      input: 'bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output:
        '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
    },
    {
      input:
        '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output:
        '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
    },
    {
      input:
        'ipfs://bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output:
        '/ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
    },
    {
      input:
        'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output:
        '/ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
    },
    {
      input: 'ipfs://bafybeibe6ihmid6i5a777n4znvnovok6szkju6ijde4wzprd2zkntqj4gi/4.json',
      output: '/ipfs/bafybeibe6ihmid6i5a777n4znvnovok6szkju6ijde4wzprd2zkntqj4gi/4.json'
    }
  ]

  for (const test of tests) {
    it(test.input, () => {
      expect(sanitize(test.input).path).eq(test.output)
    })
  }
})
