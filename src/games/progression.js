import buildGame from '..';
import getRandomNum from '../utils';
import { cons } from 'hexlet-pairs';
/**
 * Game Arithmetic progression
 * @example
 * What number is missing in this progression?
 * Question: 5 7 9 11 13 .. 17 19 21 23
 * Your answer: 15
 * Correct!
 */
const description = 'What number is missing in this progression?';
const lenght = 10;
const generateQuestion = () => {
  const arrayIndex = getRandomNum(0, 9);
  const arrayForProgression = [];
  let startProgression = getRandomNum(1, 20);
  const stepProgression = getRandomNum(1, 10);
  for (let i = 0; i < lenght; i += 1) {
    arrayForProgression[i] = startProgression + (stepProgression * i);
    startProgression += stepProgression;
  }
  const correctAnswer = String(arrayForProgression[arrayIndex]);
  arrayForProgression[arrayIndex] = '..';
  const getQuestion = arrayForProgression.join(' ');
  return cons(getQuestion, Math.abs(correctAnswer));
};
export default () => buildGame(description, generateQuestion);
