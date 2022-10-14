import { expect, it, describe } from 'vitest'
import { serializer } from '../src'

describe('packageName', () => {
  const tests = [
    { input: BigInt(9007199254740991), output: '9007199254740991' },
    { input: 9007199254740991, output: 9007199254740991 }
  ]

  for (const test of tests) {
    it(`${test.input}`, () => {
      expect(serializer('', test.input)).eq(test.output)
    })
  }
})
