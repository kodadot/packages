# @kodadot1/hyperdata

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Magic static void main


## Usage

Install package:

```sh
# npm
npm install @kodadot1/hyperdata

# yarn
yarn add @kodadot1/hyperdata

# pnpm
pnpm install @kodadot1/hyperdata
```

Import:

```js
// ESM
import * as static from "@kodadot1/hyperdata";

// CommonJS
const static = require("@kodadot1/hyperdata");
```

## Available files

### 🔧 normalize

Unifying data structure into one format

- attributeFrom - unify attribute to one format
- contentFrom - unify metadata to one format
- normalize - sanitize content fields to one format

### 🔧 utils

Misc utils for manipulating with data

### 🔧 types

Misc types for metadata namely:

- OpenSea
- FxHash
- Tezos (TZIP-16)
- ERC-5773
- [NFT Metadata CheatSheet](https://www.pob.studio/learn/metadata-cheat-sheet)

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kodadot1/hyperdata?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kodadot1/hyperdata
[npm-downloads-src]: https://img.shields.io/npm/dm/@kodadot1/hyperdata?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kodadot1/hyperdata
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/@kodadot1/hyperdata/ci.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/@kodadot1/hyperdata/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/@kodadot1/hyperdata/main?style=flat-square
[codecov-href]: https://codecov.io/gh/@kodadot1/hyperdata
