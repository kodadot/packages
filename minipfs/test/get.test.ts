import { expect, it, describe } from 'vitest'
import { $obtain } from '../src'
const TIMEOUT = 60000 // 60 seconds
const output = {
  description: '#9',
  name: 'Basilisk Sama',
  attributes: [],
  image: 'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
}

describe('utils::get should', () => {
  it('fetch if correct IPFS CID is provided', () => {
    const test = {
      input: 'bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output
    }
    expect($obtain(test.input)).eq(test.output)
  }, TIMEOUT)

  it('fetch if correct IPFS Path is provided', () => {
    const test = {
      input: '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output
    }
    expect($obtain(test.input)).eq(test.output)
  }, TIMEOUT)

  it('fetch if correct IPFS URL with ipfs prefix is provided', () => {
    const test = {
      input: 'ipfs://bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output
    }
    expect($obtain(test.input)).eq(test.output)
  }, TIMEOUT)

  it('fetch if correct IPFS URL with ipfs/ipfs prefix is provided', () => {
    const test = {
      input: 'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output
    }
    expect($obtain(test.input)).eq(test.output)
  }, TIMEOUT)

  it('fetch if correct HTTPS URL is provided', () => {
    const test = {
      input: 'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output
    }
    expect($obtain(test.input)).eq(test.output)
  }, TIMEOUT)

  // it('return empty if object', () => {
  //   expect($obtain(test.input)).eq(test.output)
  // }, TIMEOUT)
})
