import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, dear ${userName}\n`);
  return userName;
};

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export { randomNumber, greeting };
