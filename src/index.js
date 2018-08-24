import readlineSync from 'readline-sync';
import { toString, car, cdr } from 'hexlet-pairs';

const roundsCount = 3;
const printArg = arg => console.log(arg);

const buildGame = (getDescription, generateQuestion) => {
  const welcome = 'Welcome to Brain Games! \n';
  printArg(welcome);
  printArg(getDescription);
  const userName = readlineSync.question('May I have your name? ');
  printArg(`\n Hello! ${userName}`);
  const playRounds = (acc) => {
    const newRound = generateQuestion();
    console.log(toString(newRound));
    const genNewQuestion = car(newRound);
    const genNewAnswer = cdr(newRound);
    if (acc === roundsCount) {
      return printArg(`\n Congratulations ${userName}!`);
    }
    printArg(`\n Question: ${genNewQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (genNewAnswer === userAnswer) {
      printArg('Correct!');
      return playRounds(acc + 1);
    }
    return printArg(`'${userAnswer}' is wrong answer ;(. Correct answer was '${genNewAnswer}'. \n Let's try again, ${userName}`);
  };
  return playRounds(0);
};

export default buildGame;
