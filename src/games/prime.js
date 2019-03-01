import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const header = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
const gamePrimeBody = () => {
  const question = randomNumber(1, 10000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => game(header, gamePrimeBody);
