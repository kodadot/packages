import { expect, it, describe } from 'vitest'
import { $obtain } from '../src'

const TIMEOUT = 60000 // 60 seconds
const output = {
  description: '#9',
  name: 'Basilisk Sama',
  attributes: [],
  image: 'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
}

type Out = typeof output

describe('utils::get should', () => {
  it('fetch if correct IPFS CID is provided', async () => {
    const test = {
      input: 'bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output
    }
    const res = await $obtain<Out>(test.input)
    expect(res).toStrictEqual(test.output)
  }, TIMEOUT)

  it('fetch if correct IPFS Path is provided', async () => {
    const test = {
      input: '/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output
    }
    const res = await $obtain<Out>(test.input)
    expect(res).toStrictEqual(test.output)
  }, TIMEOUT)

  it.only('fetch if correct IPFS URL with ipfs prefix is provided', async () => {
    const test = {
      input: 'ipfs://bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output
    }
    const res = await $obtain<Out>(test.input, [], false)
    console.log(res)
    expect(res).toStrictEqual(test.output)
  }, TIMEOUT)

  it.only('fetch if correct IPFS URL with ipfs/ipfs prefix is provided', async () => {
    const test = {
      input: 'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq',
      output
    }
    const res = await $obtain<Out>(test.input, [], false)
    console.log(res)
    expect(res).toStrictEqual(test.output)
  }, TIMEOUT)

  it('fetch if correct HTTPS URL is provided', async () => {
    const test = {
      input: 'https://ipfs.io/ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
      output
    }
    const res = await $obtain<Out>(test.input)
    expect(res).toStrictEqual(test.output)
  }, TIMEOUT)

  // it('return empty if object', async () => {
  //   expect(await $obtain(test.input)).toStrictEqual(test.output)
  // }, TIMEOUT)

  //     it('Invalid url', async () => {
//       expect.assertions(1)
//       try {
//         await ipfsGet('test///')
//       } catch (e) {
//         expect(1).toBe(1)
//       }
//     })
//   })
})
