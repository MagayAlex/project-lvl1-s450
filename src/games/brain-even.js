import { cons } from 'hexlet-pairs';
import { isEven } from '..';

const header = 'Answer "yes" if number even otherwise answer "no".\n';
const gameEvenBody = () => {
  const question = Math.floor(Math.random() * 80);
  const answer = isEven(question);
  return cons(question, answer);
};

export { header, gameEvenBody };
