import { cons } from 'hexlet-pairs';
import game from '..';

const header = 'What is the result of the expression?\n';
const gameCalcBody = () => {
  const number1 = Math.floor(Math.random() * 80);
  const number2 = Math.floor(Math.random() * 100);
  let answer;
  let opertator;
  if (number2 % 3 === 2) {
    answer = number1 + number2;
    opertator = '+';
  } else if (number2 % 3 === 0) {
    answer = number1 - number2;
    opertator = '-';
  } else {
    answer = number1 * number2;
    opertator = '*';
  }
  const question = `${number1} ${opertator} ${number2}`;
  return cons(question, answer);
};

export default () => game(header, gameCalcBody);
