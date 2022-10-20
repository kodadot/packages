# packages

Monorepository of npm packages we use in our projects.

# Contributing

Thanks for being interested in contributing to this project!

Pre-requirement:
- [Node.js](http://nodejs.org/) version 16+
- [pnpm](https://pnpm.io/) version 7+

Clone the repo, and install dependencies:
```sh
pnpm install
```

Start developing specific package with [pnpm command](https://pnpm.io/filtering)
```sh
pnpm --filter <package_selector> <command>
pnpm -F <package_selector> <command>

# example
pnpm -F minimark dev
pnpm -F @kodadot1/sub-api dev
```

Build the source code with [turborepo command](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task)

```sh
turbo run <task1> <task2> [options] [-- <args passed to task1 and task2>]

# run commands to all packages
pnpm build
pnpm lint
pnpm test

# run commands for specific package
pnpm turbo run build --filter=if-that
pnpm turbo run build --filter=@kodadot1/minimark
```