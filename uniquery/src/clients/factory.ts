import { Provider } from '../types'
import SquidClient from './SquidClient'

type Client = SquidClient

function getClient(): Client {
  return new SquidClient()
}

export function isSubQuery (provider?: Provider) {
  return provider === 'subquery'
}

export default getClient
