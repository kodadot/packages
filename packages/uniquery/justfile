#!/usr/bin/env just --justfile

build:
  yarn build

link:
  yarn link

publish:
  yarn publish --access public

c VERSION:
  git commit -am "Updated kodapi@{{VERSION}}"

up: build publish
