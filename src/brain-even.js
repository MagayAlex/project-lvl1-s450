import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the BRAIN GAMES!!!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);
  const iter = (counter) => {
    const attemptsCounter = 3; // здесь можно указать число игровых циклов
    if (counter === attemptsCounter) {
      return console.log(`Congratulations, ${userName}, you win`);
    }
    const question = Math.floor(Math.random() * 10);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rigthAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === rigthAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    if (question % 2 === 0) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".`);
      return `Let's try agaain, ${userName}`;
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".`);
    return `Let's try agaain, ${userName}`;
  };
  return iter(0); // здесь я задаю начальное значение счётчика. не пойму как можно иначе
};
