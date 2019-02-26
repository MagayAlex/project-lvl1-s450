import readlineSync from 'readline-sync';
const mainFunc = name => {
	console.log ('Welcome to the BRAIN GAMES!!!');
	const userName = readlineSync.question('May i have your name? ');
	console.log (`Hello, dear ${userName}`);
};
export default mainFunc;