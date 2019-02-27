import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { header, func } from './brain-even';
import brainCalcGame from './brain-calc';
const brainGreeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);
  return userName;
};

const game = (userName, counter, func) => {
    const iter = (counter) => {
    const question = car(func);
    const answer = cdr(func);
    const attemptsCounter = 3; // здесь можно указать число игровых циклов
    if (counter === attemptsCounter) {
      return console.log(`Congratulations, ${userName}, you win`);
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      return `Let's try agaain, ${userName}`; 
    };
  return iter(counter);  
};

const brainCalc = () => {
	console.log('\nWelcome to the BRAIN GAMES!!!');
  console.log('What is the result of the expressions?\n');
  brainCalcGame(brainGreeting());
};
export { brainGreeting, brainCalc, game };
