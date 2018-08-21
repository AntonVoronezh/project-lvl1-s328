install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

make lint:
	npm run eslint