import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';
/** toString
 * Game Balance
 * @example
 * Balance the given number
 * Question: 215
 * Your answer: 233
 * Correct!
 */
const description = 'Balance the given number';
const balanceNum = (number) => {
  let count = 0;
  let summ = 0;
  let num = number;
  while (num !== 0) {
    summ += num % 10;
    count += 1;
    num = Math.floor(num / 10);
  }
  const integerPart = Math.floor(summ / count);
  let remainder = summ % count;
  let result = 0;
  for (let i = 0; i < count; i += 1) {
    result += integerPart * (10 ** i);
    if (remainder) {
      result += 1 * (10 ** i);
      remainder -= 1;
    }
  }
  const zerroCount = count - String(result).length;
  for (let i = 0; i < zerroCount; i += 1) {
    result = `0${result}`;
  }
  return result;
};
const generateQuestAndCorrectAns = () => {
  const randNum = getRandomNum(100, 999);
  const question = `${randNum}`;
  const correctAnswer = String(balanceNum(randNum));
  return cons(question, correctAnswer);
};
export default () => buildGame(description, generateQuestAndCorrectAns);
