import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';
/**
 * Game Greatest Common Divisor
 * @example
 * Find the greatest common divisor of given numbers.
 * Question: 25 50
 * Your answer: 25
 * Correct!
 */
const description = 'Find the greatest common divisor of given numbers';
const getGreatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};
const generateQuestion = () => {
  const getNum1 = getRandomNum(1, 100);
  const getNum2 = getRandomNum(1, 100);
  const getQuestion = `${getNum1} ${getNum2}`;
  const correctAnswer = getGreatestCommonDivisor(getNum1, getNum2);
  return cons(getQuestion, correctAnswer);
};
export default () => buildGame(description, generateQuestion);
