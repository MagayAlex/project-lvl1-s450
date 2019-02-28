import readlineSync from 'readline-sync';
import { brainGreeting, isEven, attemptsCounter } from './index';

export default () => {
  console.log('Welcome to the BRAIN GAMES!!!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = brainGreeting();
  const iter = (counter) => {
    if (counter === attemptsCounter) {
      console.log(`Congratulations, ${userName}, you win`);
      return;
    }
    const question = Math.floor(Math.random() * 80);
    const answer = isEven(question);
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
