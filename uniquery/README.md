# @kodadot1/uniquery

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> GraphQL builder for KodaDot API

## Usage

Add Uniquery to your project

```sh
# with npm
npm install @kodadot1/uniquery

# with yarn
yarn install @kodadot1/uniquery

# with pnpm
pnpm install @kodadot1/uniquery
```

Import:

```js
// ESM
import getClient from '@kodadot1/uniquery'

// CommonJS
const getClient = require('@kodadot1/uniquery')
```

```js
const client = getClient('subquery')
const query = client.collectionListByIssuer('vikiival')

console.log(query)
```

```js
{
  query: 'query  { collections: collectionEntities(filter: { issuer: { equalTo: vikiival } })  { nodes { id, metadata, currentOwner, issuer } } }',
  variables: {}
}
```

## ⚓️ Exported functions

### ✔️  Uniquery

- `getClient` - returns GrahpQL query builder

### ✔️  Uniquery.client

- nftById - returns NFT by id
- nftListByOwner - returns NFTs where owner is equal to provided address
- nftListByIssuer - returns NFTs where issuer (creator) is equal to provided address
- nftListCollectedBy - returns NFTs where owner is equal to provided address however it's not the issuer of the NFT
- nftListSoldBy - no idea :shrug:
- nftListByCollectionId - returns NFTs where collection id is equal to provided id
- nftListForSale - returns NFTs where price is greater than 0
- collectionById - returns collection by id
- collectionListByOwner - returns collections where owner is equal to provided address
- collectionListByIssuer - returns collections where issuer (creator) is equal to provided address

### ✔️  REST

- collection/:id
- collectionByIssuer/:issuer
- collectionByOwner/:owner
- eventByAddress/:address
- eventByInteraction/:interaction
- eventByNftId/:id
- nft/:id
- nftByCollection/:id
- nftByCollectionList/:ids
- nftByIssuer/:issuer
- nftByCid/:id
- nftByOwner/:owner
- nftCollectedBy/:address
- nftSoldBy/:address

#### ⚠️ Caveats

REST implementation supports only functions that requires exactly one parameter.
Please open a pull-request if you know how to fix this

### ✔️  Missing functions

- nftListByCollectionIdList - return list of NFTs by list of collectionIds
- nftListByMetadataId - returns NFTs where metadata is equal to provided uri
- nftListByCollectionIdAndOwner - returns NFTs where collection id is equal to provided id and owner is equal to provided address
- collectionStatListById - returns collection metrics by id
- eventListByNftId - returns events by nft id
- eventListByInteraction - returns events by interaction
- eventListByCollectionId - returns events for NFTs by collection id
- eventListByCollectionIdAndInteraction - returns events for NFTs by collection id and interaction
- lastNftIdbyCollectionId - returns last token id for collection by id
- eventListByAddress - returns events by address


## Development 💻

- Clone this repository
```bash
git clone https://github.com/kodadot/packages.git

```

- Navigate to the packages directory
```bash
cd packages
```

- Navigate to the uniquery directory
```bash
cd uniquery
```

- Enable [Corepack](https://github.com/nodejs/corepack) by running:

```bash
corepack enable
```

or

```bash
npm i -g corepack
```

- Install Dependencies
```bash
yarn install
```
- Run interactive tests

```bash
yarn dev
```

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kodadot1/uniquery?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kodadot1/uniquery

[npm-downloads-src]: https://img.shields.io/npm/dm/@kodadot1/uniquery?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kodadot1/uniquery

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/@kodadot1/uniquery/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/@kodadot1/uniquery/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@kodadot1/uniquery/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@kodadot1/uniquery
