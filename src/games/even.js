import buildGame from '..';
import getRandomNum from '../func';
import { cons } from 'hexlet-pairs';
/**
 * Game Even
 * @example
 * Answer "yes" if number even otherwise answer "no".
 * Question: 15
 * Your answer: no
 * Correct!
 */
const description = 'Answer "yes" if number even otherwise answer "no".';
const generateQuestion = () => {
  const getQuestion = getRandomNum(1, 100);
  const isEven = arg => arg % 2 === 0;
  const correctAnswer = arg => (isEven(arg) ? 'yes' : 'no');
  return cons(getQuestion, correctAnswer(getQuestion));
};
const playNow = () => buildGame(description, generateQuestion);
export default playNow;
