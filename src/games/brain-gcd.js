import { cons } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';

const gcd = (a, b) => {
  if (b !== 0) {
    return gcd(b, a % b);
  } if (a < b) {
    return gcd(a, b % a);
  }
  return a;
};

const header = 'Find the greatest common divisor of given numbers.\n';
const gameGCDBody = () => {
  const number1 = randomNumber(0, 600);
  const number2 = randomNumber(0, 200);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return cons(question, String(answer));
};

export default () => game(header, gameGCDBody);
