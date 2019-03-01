import { cons } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';


const header = 'What is the result of the expression?\n';
const gameCalcBody = () => {
  const number1 = randomNumber(0, 1000);
  const number2 = randomNumber(0, 300);
  let operator;
  let answer;
  switch (randomNumber(1, 3)) {
    case 1:
      operator = '+';
      answer = number1 + number2;
      break;
    case 2:
      operator = '-';
      answer = number1 - number2;
      break;
    case 3:
      operator = '*';
      answer = number1 * number2;
      break;
    default:
      break;
  }
  const question = `${number1} ${operator} ${number2}`;
  return cons(question, String(answer));
};

export default () => game(header, gameCalcBody);
