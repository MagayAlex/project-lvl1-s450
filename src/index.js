import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptsCounter = 3;
const greeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}\n`);
  return userName;
};
export default (header, gameBody) => {
  console.log('\nWelcome to the BRAIN GAMES!!!');
  console.log(`${header}`);
  const userName = greeting();
  const iter = (counter) => {
    if (counter === attemptsCounter) {
      console.log(`Congratulations, ${userName}, you win`);
      return;
    }
    const pairQA = gameBody();
    const question = car(pairQA);
    const answer = cdr(pairQA);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}`);
    }
  };
  iter(0);
};
