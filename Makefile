install: 
	npm install

start:
	npx babel-node -- src/bin/even.js
	npx babel-node -- src/bin/calc.js
	npx babel-node -- src/bin/gcd.js
	npx babel-node -- src/bin/progression.js
	npx babel-node -- src/bin/prime.js

publish:
	npm publish

lint:
	npx eslint .
