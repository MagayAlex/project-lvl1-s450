import { cons } from 'hexlet-pairs';
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
  const number1 = Math.abs(Math.floor(Math.random() * 800));
  const number2 = Math.abs(Math.floor(Math.random() * 500));
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return cons(question, answer);
};

export default () => game(header, gameGCDBody);
