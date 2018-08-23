import readlineSync from 'readline-sync';

const roundsCount = 3;
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
  const description = 'Answer "yes" if number even otherwise answer "no".';
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello!${userName}`);
  const playRounds = (acc) => {
    if (acc === roundsCount) {
      return `\n Congratulations ${userName}!`;
    }
    const question = Math.floor(Math.random() * 10);
    console.log(`\n Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = question % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return playRounds(acc + 1);
    } if (correctAnswer !== userAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}`;
    }
    return undefined;
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
  const description = 'What is the result of the expression?';
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello!${userName}`);
  const playRounds = (acc) => {
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
