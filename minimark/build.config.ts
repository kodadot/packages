import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './src/index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    {
      input: './src/rmrk/',
      outDir: './dist/v1'
    }
  ],
  outDir: 'dist',
  declaration: true,
  rollup: {
    emitCJS: true
  }
})
