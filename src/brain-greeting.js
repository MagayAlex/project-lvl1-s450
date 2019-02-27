import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}`);
};

