import readlineSync from 'readline-sync';

const brainGreeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);
  return userName;
};
const isEven = number => (number % 2 === 0 ? 'yes' : 'no');
const attemptsCounter = 3;

export { brainGreeting, isEven, attemptsCounter };
