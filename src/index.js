import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptsCounter = 3;
const brainGreeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}\n`);
  return userName;
};
const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const game = (header, gameBody) => {
  console.log('Welcome to the BRAIN GAMES!!!');
  console.log(`${header}`);
  const userName = brainGreeting();
  const iter = (counter) => {
    const pairQA = gameBody();
    const question = car(pairQA);
    const answer = cdr(pairQA);
    if (counter === attemptsCounter) {
      console.log(`Congratulations, ${userName}, you win`);
      return;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try agaain, ${userName}`);
    }
  };
  iter(0);
};

export { brainGreeting, isEven, game };
