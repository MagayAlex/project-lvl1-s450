import {
  cons,
  l,
  toString,
  reverse,
} from 'hexlet-pairs-data';
import * as pairs from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const header = 'What number is missing in the progression?\n';
const progressionStep = 3;
const progressionLength = 10;

const gameProgressionBody = () => {
  const startNumber = randomNumber(0, 100);
  const positionOfAnswer = randomNumber(1, progressionLength);
  const listWithQuestion = (count, acc) => {
    if (count === progressionLength) {
      return reverse(acc);
    }
    if (count === positionOfAnswer) {
      return listWithQuestion(count + 1, cons('..', acc));
    }
    return listWithQuestion(count + 1, cons(startNumber + count * progressionStep, acc));
  };
  const question = toString(listWithQuestion(1, l(startNumber)));
  const answer = startNumber + positionOfAnswer * progressionStep;
  return pairs.cons(question, String(answer));
};

export default () => game(header, gameProgressionBody);
