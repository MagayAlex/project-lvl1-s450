import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const header = 'What number is missing in the progression?\n';
const progressionLength = 10;

const gameProgressionBody = () => {
  const progressionStep = randomNumber(0, 10);
  const startNumber = randomNumber(0, 100);
  const positionOfAnswer = randomNumber(0, progressionLength - 1);
  const listWithQuestion = (count, acc) => {
    if (count === progressionLength) {
      return acc;
    }
    if (count === positionOfAnswer) {
      return listWithQuestion(count + 1, `${acc} ..`);
    }
    const newElement = startNumber + count * progressionStep;
    return listWithQuestion(count + 1, `${acc} ${newElement}`);
  };
  const question = listWithQuestion(1, startNumber);
  const answer = startNumber + positionOfAnswer * progressionStep;
  return cons(question, String(answer));
};

export default () => game(header, gameProgressionBody);
