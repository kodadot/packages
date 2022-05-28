export type SomeNFT = {
  blockNumber: string,
  burned: boolean,
  createdAt: string,
  currentOwner: string,
  hash: string,
  id: string,
  issuer: string,
  metadata: string,
  name: string,
  price: string,
  recipient: string,
  royalty: number,
  sn: string,
  updatedAt: string,
  previousOwnerCount?: number
}

export const nftList: SomeNFT[] = [
  {
    blockNumber: '8739',
    burned: false,
    createdAt: '2022-04-01T15:21:54.034Z',
    currentOwner: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    hash: '70aa9455fd7404e71f92323f093c4466',
    id: '1000001-3',
    issuer: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    metadata:
      'ipfs://ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
    name: 'Basilisk Sama',
    price: '1000000000000000000',
    recipient: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    royalty: 25,
    sn: '3',
    updatedAt: '2022-04-01T15:21:54.034Z'
  },
  {
    blockNumber: '8727',
    burned: false,
    createdAt: '2022-04-01T15:19:30.029Z',
    currentOwner: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    hash: '6aafa51c9c3d28108923bcfd3370dba8',
    id: '1000001-1',
    issuer: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    metadata:
      'ipfs://ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
    name: 'Basilisk Sama',
    price: '0',
    recipient: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    royalty: 100,
    sn: '1',
    updatedAt: '2022-04-01T15:19:30.029Z'
  },
  {
    blockNumber: '8725',
    burned: false,
    createdAt: '2022-04-01T15:19:06.043Z',
    currentOwner: 'bXkmyHuV41u7yVDsYEGerdtZZzkA8szX7RYtkkxWcd6J5CSGP',
    hash: 'cad8b9c9f050d06fe30c365c7ae616cf',
    id: '1000001-0',
    issuer: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    metadata:
      'ipfs://ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
    name: 'Basilisk Sama',
    price: '0',
    recipient: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    royalty: 20,
    sn: '0',
    updatedAt: '2022-04-01T15:19:06.043Z'
  },
  {
    blockNumber: '8729',
    burned: false,
    createdAt: '2022-04-01T15:19:54.030Z',
    currentOwner: 'bXjzbyNNqeZjHq6PqdZFjc3tHkKXngUVAkgw9NNWMg4JBKQyD',
    hash: '7a3afdf23a506e1dfee83c49ac8e3736',
    id: '1000001-2',
    issuer: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    metadata:
      'ipfs://ipfs/bafkreiazeqysfmeuzqcnjp6rijxfu5h7sj3t4h2rxehi7rlyegzfy7lxeq',
    name: 'Basilisk Sama',
    price: '0',
    recipient: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    royalty: 80,
    sn: '2',
    updatedAt: '2022-04-01T15:19:54.030Z'
  },
  {
    blockNumber: '339914',
    burned: false,
    createdAt: '2022-05-18T10:51:30.031Z',
    currentOwner: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    hash: 'bb7320cf6160fea384c79d897e7a34d3',
    id: '2224622395-1',
    issuer: 'bXjmyHufR6HcjAtKNVTV4UjHj3poQW3d2yYWKDdWe5cGGmg3z',
    metadata:
      'ipfs://ipfs/bafkreie6aheicniw2ene6iofxj7e6cettjioxojdstwabdqkxozjk2tyru',
    name: 'Borko',
    price: '1000000000000',
    recipient: null,
    royalty: null,
    sn: '1',
    updatedAt: '2022-05-18T10:51:30.031Z'
  }
]
