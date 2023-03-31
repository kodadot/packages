# @kodadot1/minipfs

A set of tools to work with IPFS URIs.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

![minimark pokemon](.github/minipfs.png)

## 🚀 Quick Start

Install package:

```sh
# npm
npm install @kodadot1/minipfs

# yarn
yarn install @kodadot1/minipfs

# pnpm
pnpm install @kodadot1/minipfs
```

Import:

```js
// ESM
import { $obtain } from '@kodadot1/minipfs'

// CommonJS
const { $obtain } = require('@kodadot1/minipfs')
```

## ⚓️ Exported functions

### ✔️  Arweave

- `toArweavePath` - Convert AR URI to Arweave HTTP URI

### ✔️  CID

- `isCID` - is URI CID?
- `isHTTP` - is URI HTTP?
- `isPath` - is URI IPFS path?
- `toIPFSPath` - Convert IPFS something to IPFS path
- `isDefaultPinataProvider` - check if URI is default HTTPS Pinata gateway
- `canBeIPFS` - check if URI can be IPFS path or IPFS CID
- `extractIPFS` - convert `ipfs://` prefixed URI to IPFS path

### ✔️  Gateways

- `IPFSProviders` - named list of IPFS gateways
- `AvailableProviders` - IPFSProviders Array
- `ipfsProviders:` - Record of IPFSProviders and their URLs
- `getProviderList` - convert IPFSProviders Array to URL Array

### ✔️  Magic

- `$obtain<T>` - put any URI and get back your T (Put your Metadata type here)
- `$purify` - put any URI and get sanitized HTTP URI

### ✔️  Obtain

- `obtain:` - Wrapper around `$fetch` from `ofetch`
- `obtainSafe` - Same as `obtain` but returns empty object if error
- `obtainFast` - Same as `obtain` but throws Error after 8 seconds
- `obtainMedia` - use for fetching media files
- `obtainMimeType` - use for fetching mime type of file

### ✔️  Race

- `competition` - put IPFS path, provider list and get back fastest response

### ✔️  Sanitize

- `sanitize` - convert any URI into usable URI to fetch

### ...Rest

`types` and `constants` were exported as well, but omitted here.

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💖

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kodadot1/minipfs?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kodadot1/minipfs

[npm-downloads-src]: https://img.shields.io/npm/dm/@kodadot1/minipfs?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kodadot1/minipfs

[github-actions-src]: https://img.shields.io/github/workflow/status/@kodadot1/minipfs/ci/main?style=flat-square
[github-actions-href]: https://github.com/@kodadot1/minipfs/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/@kodadot1/minipfs/main?style=flat-square
[codecov-href]: https://codecov.io/gh/@kodadot1/minipfs
