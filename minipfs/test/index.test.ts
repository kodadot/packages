import { expect, it, describe } from 'vitest'
import { isFullPath } from '../src'

describe('isFullPath', () => {
  const tests = [
    { input: 'ipfs://ipfs/bafybeihrnpphrgs5os47w35a5ypqt3mqashd5tn3v27pqt2iiw3hikavhm', output: true },
    { input: 'ipfs://bafybeihrnpphrgs5os47w35a5ypqt3mqashd5tn3v27pqt2iiw3hikavhm', output: true },
    { input: 'ipfs://bafybeibe6ihmid6i5a777n4znvnovok6szkju6ijde4wzprd2zkntqj4gi/4.json', output: true }
  ]

  for (const test of tests) {
    it(test.input, () => {
      expect(isFullPath(test.input)).eq(test.output)
    })
  }
})
