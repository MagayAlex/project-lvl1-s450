import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);

  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    const number = Math.floor(Math.random() * 10);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      return iter(counter + 1);
    }
    if (number % 2 === 1 && userAnswer === 'no') {
      console.log('Correct!');
      return iter(counter + 1);
    }
    if (number % 2 === 1) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try agaain, ${userName}`);
    }
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try agaain, ${userName}`);
  };
  return iter(0);
};
