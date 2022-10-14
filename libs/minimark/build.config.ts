import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    'src/index'
    // this is how to make whole package tree available
    // {
    //   input: './src/rmrk/',
    //   outDir: './dist/v1'
    // },
  ],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true
  }
})

// Subpath import in package.json
// {
//   input: 'src/common/index',
//   name: 'common'
// }
// {
//   "exports": {
//     "./common": {
//       "types": "./dist/common.d.ts",
//       "import": "./dist/common.mjs",
//       "require": "./dist/common.cjs"
//     }
//   }
// }
