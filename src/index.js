#!/usr/bin/env node
import readlineSync from 'readline-sync';
/**
 * Game Even
 * @example
 * Answer "yes" if number even otherwise answer "no".
 * Question: 15
 * Your answer: no
 */
const playEven = () => {
  const welcome = 'Welcome to Brain Games! \n';
  console.log(welcome);
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello!${userName}`);
  const playRounds = (acc) => {
    const roundsCount = 3;
    if (acc === roundsCount) {
      return `\n Congratulations ${userName}!`;
    }
    const randomNumForQuestion = Math.floor(Math.random() * 10);
    console.log(`\n Question: ${randomNumForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumForQuestion % 2 === 0 ? 'yes' : 'no';
    const isEven = correctAnswer === userAnswer;
    if (isEven) {
      console.log('Correct!');
      return playRounds(acc + 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}`;
  };
  console.log(playRounds(0));
};
export default playEven;

/**
 * Game Calc
 * @example
 * What is the result of the expression?
 * Question: 4 + 10
 * Your answer: 14
 */

export const playCalc = () => {
  const welcome = 'Welcome to Brain Games! \n';
  console.log(welcome);
  const rules = 'What is the result of the expression?';
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello!${userName}`);
  const playRounds = (acc) => {
    const roundsCount = 3;
    if (acc === roundsCount) {
      return `\n Congratulations ${userName}!`;
    }
    const randomNumForExpression1 = Math.floor(Math.random() * 10);
    const randomNumForExpression2 = Math.floor(Math.random() * 10);
    const outputTotheScreen = (expressionForQuestion) => {
      const userAnswer = readlineSync.question('Your answer: ');
      const isEven = Math.floor(expressionForQuestion) === Math.floor(userAnswer);
      if (isEven) {
        console.log('Correct!');
        return playRounds(acc + 1);
      }
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionForQuestion}'. \n Let's try again, ${userName}`;
    };

    if (acc === 0) {
      console.log(`\n Question: ${`${randomNumForExpression1} + ${randomNumForExpression2}`}`);
      return outputTotheScreen(randomNumForExpression1 + randomNumForExpression2);
    } if (acc === 1) {
      console.log(`\n Question: ${`${randomNumForExpression1} - ${randomNumForExpression2}`}`);
      return outputTotheScreen(randomNumForExpression1 - randomNumForExpression2);
    } if (acc === 2) {
      console.log(`\n Question: ${`${randomNumForExpression1} * ${randomNumForExpression2}`}`);
      return outputTotheScreen(randomNumForExpression1 * randomNumForExpression2);
    }
    return undefined;
  };
  console.log(playRounds(0));
};
