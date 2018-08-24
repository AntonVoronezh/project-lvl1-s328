import buildGame from '..';
import getRandomNum from '../func';
import { cons } from 'hexlet-pairs';

/**
 * Game Calc
 * @example
 * What is the result of the expression?
 * Question: 4 + 10
 * Your answer: 14
 */
const description = 'What is the result of the expression?  \n';
const generateQuestion = () => {
  const getRand = getRandomNum(0, 3);
  const getNum1 = getRandomNum(1, 10);
  const getNum2 = getRandomNum(1, 10);
  const exp1 = getNum1 + getNum2;
  const exp2 = getNum1 - getNum2;
  const exp3 = getNum1 * getNum2;
  const ans1 = `${getNum1}+${getNum2}`;
  const ans2 = `${getNum1}-${getNum2}`;
  const ans3 = `${getNum1}*${getNum2}`;
  if (getRand === 1) { return cons(ans1, exp1); }
  if (getRand === 2) { return cons(ans2, exp2); }
  return cons(ans3, exp3);
};
const playNow = () => buildGame(description, generateQuestion);
export default playNow;
