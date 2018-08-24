import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';
/**
 * Game Even
 * @example
 * Answer "yes" if number even otherwise answer "no".
 * Question: 15
 * Your answer: no
 * Correct!
 */
const description = 'Answer "yes" if number even otherwise answer "no"';
const isEven = arg => arg % 2 === 0;
const generateQuestion = () => {
  const getQuestion = getRandomNum(1, 100);
  const correctAnswer = arg => (isEven(arg) ? 'yes' : 'no');
  return cons(getQuestion, correctAnswer(getQuestion));
};
export default () => buildGame(description, generateQuestion);
