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
const description = 'Answer "yes" if number even otherwise answer "no".  \n';
const generateQuestion = () => {
  const randNum = getRandomNum(1, 100);
  const correctAnswer = arg => (arg % 2 === 0 ? 'yes' : 'no');
  return cons(randNum, correctAnswer(randNum));
};
const playNow = () => buildGame(description, generateQuestion);
export default playNow;
