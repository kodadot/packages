// import { expect, vi, describe, it } from 'vitest'
// import { ipfsGet } from '../src/race'

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         description: '#9',
//         name: 'Basilisk Sama',
//         attributes: [],
//         image:
//           'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
//       })
//   })
// ) as unknown as any // Temporary fix for vitest

// describe('Utils/ipfs ', () => {
//   describe('Get ipfs', () => {
//     it('Get with ipfs:// prefix', async () => {
//       const metadata = await ipfsGet(
//         'ipfs://bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
//       )
//       const json = await metadata.json()
//       expect(json).toStrictEqual({
//         description: '#9',
//         name: 'Basilisk Sama',
//         attributes: [],
//         image:
//           'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
//       })
//     })
//     it('Get with CID hash only', async () => {
//       const metadata = await ipfsGet(
//         'bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
//       )
//       const json = await metadata.json()
//       expect(json).toStrictEqual({
//         description: '#9',
//         name: 'Basilisk Sama',
//         attributes: [],
//         image:
//           'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
//       })
//     })
//     it('Get with aditional url part', async () => {
//       const metadata = await ipfsGet(
//         'ipfs://ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq'
//       )
//       const json = await metadata.json()
//       expect(json).toStrictEqual({
//         description: '#9',
//         name: 'Basilisk Sama',
//         attributes: [],
//         image:
//           'ipfs://ipfs/bafybeiennmmolv3keadouvgrhqkkfhprobvikl6hmblg4x2nxsn7s7lrjq'
//       })
//     })

//     it('Invalid url', async () => {
//       expect.assertions(1)
//       try {
//         await ipfsGet('test///')
//       } catch (e) {
//         expect(1).toBe(1)
//       }
//     })
//   })
// })
