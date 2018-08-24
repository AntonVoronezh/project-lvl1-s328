import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

/**
 * Game Calc
 * @example
 * What is the result of the expression?
 * Question: 4 + 10
 * Your answer: 14
 */
const description = 'What is the result of the expression?';
const generateQuestion = () => {
  const getRand = getRandomNum(0, 3);
  const getNum1 = getRandomNum(1, 10);
  const getNum2 = getRandomNum(1, 10);
  switch (getRand) {
    case 1: {
      const exp1 = getNum1 + getNum2;
      const ans1 = `${getNum1}+${getNum2}`;
      return cons(ans1, exp1);
    }
    case 2: {
      const exp2 = getNum1 - getNum2;
      const ans2 = `${getNum1}-${getNum2}`;
      return cons(ans2, exp2);
    }
    default: {
      const exp3 = getNum1 * getNum2;
      const ans3 = `${getNum1}*${getNum2}`;
      return cons(ans3, exp3);
    }
  }
};
export default () => buildGame(description, generateQuestion);
