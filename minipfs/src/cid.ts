const isV0Cid = (cid: string): boolean => {
  return cid.length === 46 && cid.startsWith('Qm')
}

const isV1Cid = (cid: string): boolean => {
  return cid.length === 59 && cid.startsWith('baf')
}

export const isCID = (ipfsLink: string): boolean => {
  return isV0Cid(ipfsLink) || isV1Cid(ipfsLink)
}
