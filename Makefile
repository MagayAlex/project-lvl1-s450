install: 
	npm install

start:
	npx babel-node -- src/bin/progression.js
publish:
	npm publish

lint:
	npx eslint .
