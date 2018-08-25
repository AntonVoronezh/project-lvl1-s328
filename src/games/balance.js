import buildGame from '..';
import getRandomNum from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';
/**
 * Game Balance
 * @example
 * Balance the given number.
 * Question: 215
 * Your answer: 233
 * Correct!
 */
const description = 'Balance the given number';
const summa = (num) => {
  const str = String(num);
  let big = 0;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (Number(str[i]) > big) { big = Number(str[i]); }
  }
  let small = big;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (Number(str[i]) < small) { small = Number(str[i]); }
  }
  return cons(small, big);
};
const changesNum = (num, pair) => {
  const str = String(num);
  let result = '';
  const small = car(pair) + 1;
  const big = cdr(pair) - 1;
  let bigCount = 0;
  let smallCount = 0;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (Number(str[i]) === car(pair) && smallCount === 0) {
      result += small; smallCount += 1;
    } else if (Number(str[i]) === cdr(pair) && bigCount === 0) {
      result += big; bigCount += 1;
    } else {
      result += Number(str[i]);
    }
  }
  return result;
};
const isOne = arg => cdr(arg) - car(arg) === 1;
const bubbleSort = (number) => {
  const num = String(number).split('');
  const n = num.length;
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (num[j + 1] < num[j]) {
        const t = num[j + 1];
        num[j + 1] = num[j];
        num[j] = t;
      }
    }
  }
  return num.join('');
};
const getBalance = (num) => {
  const out = changesNum(num, summa(num));
  if (isOne(summa(out))) { return bubbleSort(out); }
  return getBalance(out);
};
const generateQuestion = () => {
  const question = getRandomNum(100, 999);
  const correctAnswer = getBalance(question);
  return cons(Math.abs(question), Math.abs(correctAnswer));
};
export default () => buildGame(description, generateQuestion);
