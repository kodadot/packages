<h1 align="center">sub-api</h1>

<h5 align="center">Singleton wrapper for the Substrate API</h5>

## Installation

`yarn add @kodadot1/dot-api`

## Docs

`connect` method returns `Promise<ApiPromise>`

## Usage Examples

Import sub-api object like

```ts
import Connector from '@kodadot1/sub-api'
```

Connect to selected node

```ts
const endpoint = store.state.setting.apiUrl
const { getInstance: Api } = Connector
Api().connect(endpoint)
```

Then in component

```ts
async function getChainProperties() {
  const { api } = Connector.getInstance()
  const { chainSS58, chainDecimals, chainToken } = api.registry
  console.log('[API] Connect <3', { chainSS58, chainDecimals, chainToken })
}
```

Alternatively, you can listen to the `connect` event and call `getChainProperties` when connected

```ts
const { getInstance: Api } = Connector
Api().on('connect', (api: ApiPromise) => {
  console.log('[API] has been connected')
  api.isReady.then(cb)
})
```
