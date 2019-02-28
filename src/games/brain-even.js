import { cons } from 'hexlet-pairs';
import game from '..';

const isEven = number => number % 2 === 0;
const header = 'Answer "yes" if number even otherwise answer "no".\n';
const gameEvenBody = () => {
  const question = Math.floor(Math.random() * 80);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => game(header, gameEvenBody);
