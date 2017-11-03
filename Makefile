install:
	npm install

build:
	rm -rf dist
	npm run build

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint src
