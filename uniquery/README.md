# @kodadot1/kodapi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> GraphQL builder for KodaDot API

## Usage

Install package:

```sh
# npm
npm install @kodadot1/kodapi

# yarn
yarn install @kodadot1/kodapi

# pnpm
pnpm install @kodadot1/kodapi
```

Import:

```js
// ESM
import getClient from '@kodadot1/kodapi'

// CommonJS
const getClient = require('@kodadot1/kodapi')
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

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `yarn install`
- Run interactive tests using `yarn dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kodadot1/kodapi?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kodadot1/kodapi

[npm-downloads-src]: https://img.shields.io/npm/dm/@kodadot1/kodapi?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kodadot1/kodapi

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/@kodadot1/kodapi/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/@kodadot1/kodapi/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@kodadot1/kodapi/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@kodadot1/kodapi
