import { expect, it, describe } from 'vitest'
import { $fetch } from 'ofetch'
import { obtainFast } from '../src'

describe.only('fetchMetadata', () => {
  it('should return a value', async () => {
    // const value = await fetchMetadata('QmS9Ld8STDjDSPJbvVRz2hJpBsrhFr95HmKK44r4SifvNs')
    const res = await fetch('https://image.w.kodadot.xyz/ipfs/QmS9Ld8STDjDSPJbvVRz2hJpBsrhFr95HmKK44r4SifvNs', { mode: 'no-cors', redirect: 'follow' })
    expect(res.ok).toBe(true)
    expect(res.status).toBe(200)
  })

  it('should not return a value', async () => {
    const metadata = 'https://image.w.kodadot.xyz/ipfs/QmS9Ld8STDjDSPJbvVRz2hJpBsrhFr95HmKK44r4SifvNs'
    const value = await $fetch(metadata, {
      mode: 'no-cors',
      redirect: 'follow',
      retry: 3
    })
    expect(value).toBe(undefined)
  }, { timeout: 1000000000000000 })

  it('should not return a value', async () => {
    const metadata = 'https://image.w.kodadot.xyz/ipfs/QmS9Ld8STDjDSPJbvVRz2hJpBsrhFr95HmKK44r4SifvNs'
    const value = await obtainFast(metadata)
    expect(value).toBe(undefined)
  })
})
