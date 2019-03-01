import {
  cons,
  l,
  get,
  head,
  toString,
  reverse,
} from 'hexlet-pairs-data';
import * as pairs from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';

const header = 'What number is missing in the progression?\n';
const func = x => x + 3;

const gameProgressionBody = () => {
  const startNumber = randomNumber(0, 100);
  const progressionLength = 10;
  const positionOfAnswer = randomNumber(0, progressionLength - 1);
  const createList = (length, acc) => {
    if (length === 1) {
      return reverse(acc);
    }
    return createList(length - 1, cons(func(head(acc)), acc));
  };
  const list = createList(progressionLength, l(startNumber));
  const listWithQuestion = (count, acc) => {
    if (count === progressionLength) {
      return reverse(acc);
    }
    if (count === positionOfAnswer) {
      return listWithQuestion(count + 1, cons('..', acc));
    }
    return listWithQuestion(count + 1, cons(get(count, list), acc));
  };
  const question = toString(listWithQuestion(0, l()));
  const answer = get(positionOfAnswer, list);
  return pairs.cons(question, String(answer));
};

export default () => game(header, gameProgressionBody);
