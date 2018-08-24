import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;
const welcome = 'Welcome to Brain Games! \n';

const buildGame = (getDescription, generateQuestion) => {
  console.log(welcome);
  console.log(`${getDescription}  \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello! ${userName}`);
  const playRounds = (acc) => {
    const newRound = generateQuestion();
    const genNewQuestion = car(newRound);
    const genNewAnswer = cdr(newRound);
    if (acc === roundsCount) {
      return console.log(`\n Congratulations ${userName}!`);
    }
    console.log(`\n Question: ${genNewQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (genNewAnswer === userAnswer) {
      console.log('Correct!');
      return playRounds(acc + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${genNewAnswer}'. \n Let's try again, ${userName}`);
  };
  playRounds(0);
};

export default buildGame;
