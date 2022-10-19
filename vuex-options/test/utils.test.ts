import { it, expect } from 'vitest'
import { isAuto } from '../src/utils'

it('should', function() {
  expect(isAuto('nope')).toEqual(false)
  expect(isAuto('auto')).toEqual(true)
})
