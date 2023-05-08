import { expect, it, describe } from 'vitest'
import { isFullPath } from '../src'

describe('isFullPath', () => {
  const tests = [
    { input: 'ipfs://ipfs/bafybeihrnpphrgs5os47w35a5ypqt3mqashd5tn3v27pqt2iiw3hikavhm', output: true },
    { input: 'ipfs://bafybeihrnpphrgs5os47w35a5ypqt3mqashd5tn3v27pqt2iiw3hikavhm', output: true }
  ]

  for (const test of tests) {
    it(test.input, () => {
      expect(isFullPath(test.input)).eq(test.output)
    })
  }
})
