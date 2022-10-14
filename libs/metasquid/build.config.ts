import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/index',
    'src/consolidator',
    'src/entity',
    'src/types'
  ],
  rollup: {
    emitCJS: true
  }
})
