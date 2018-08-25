import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';
/**
 * Game Greatest Common Divisor
 * @example
 * Is this number prime?
 * Question: 7
 * Your answer: yes
 * Correct!
 */
const description = 'Is this number prime?';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateQuestion = () => {
  const getNum = getRandomNum(1, 25);
  const correctAnswer = isPrime(getNum) ? 'yes' : 'no';
  return cons(getNum, String(correctAnswer));
};
export default () => buildGame(description, generateQuestion);
