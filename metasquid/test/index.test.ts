import { expect, it, describe } from 'vitest'
import { SquidUtils } from '../src/specific'

describe('General SquidUtils', () => {
  const tests = [
    { input: '0x8cc1b91e8946862c2c79915a4bc004926510fcf71c422fde977c0b0e9d9be40e', output: 'Fksmad33PFxhrQXNYPPJozgWrv82zuFLvXK7Rh8m1xQhe98' },
    { input: '0x11def1c5947cbe4396b8765f69cf23fdc3f9e5736359f53797aedc3a352f7b3a', output: 'CykZSc3szpVd95PmmJ45wE4ez7Vj3xkhRFS9H4U1WdrkaFY' }
  ]

  const { addressOf } = SquidUtils()

  for (const test of tests) {
    it(test.input, () => {
      expect(addressOf(test.input)).eq(test.output)
    })
  }
})
