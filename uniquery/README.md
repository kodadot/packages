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
