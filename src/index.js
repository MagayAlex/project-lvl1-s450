import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the BRAIN GAMES!!!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);
};
