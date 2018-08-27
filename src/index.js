import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import runEvenGame from './games/even';
import runCalcGame from './games/calc';
import runGCDGame from './games/gcd';
import runBalanceGame from './games/balance';
import runProgressionGame from './games/progression';
import runPrimeGame from './games/prime';

export const chooseTheGame = () => {
  console.log('\n Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Balance the number');
  console.log('5. Guess missing number');
  console.log('6. Prime number');
  console.log('0. Exit');
  const choice = readlineSync.question('Your choice: ');
  switch (choice) {
    case '1': runEvenGame(); break;
    case '2': runCalcGame(); break;
    case '3': runGCDGame(); break;
    case '4': runBalanceGame(); break;
    case '5': runProgressionGame(); break;
    case '6': runPrimeGame(); break;
    case '0': break;
    default:
      console.log('No such option. Choose again, please.');
      return chooseTheGame();
  }
  return null;
};

const playAgain = () => {
  const playOrNoPlay = readlineSync.question('\n \n Play again? yes / no ');
  if (playOrNoPlay === 'yes') { chooseTheGame(); }
  console.log('\n Goodbye!');
};

const roundsCount = 3;
const welcome = 'Welcome to Brain Games! \n';

const buildGame = (getDescription, generateQuestion) => {
  console.log(welcome);
  console.log(`${getDescription}  \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\n Hello! ${userName}`);
  const playRounds = (acc) => {
    if (acc === roundsCount) {
      console.log(`\n Congratulations ${userName}!`);
      playAgain();
      return;
    }
    const newRound = generateQuestion();
    const genNewQuestion = car(newRound);
    const genNewAnswer = cdr(newRound);
    console.log(`\n Question: ${genNewQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (genNewAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${genNewAnswer}'. \n Let's try again, ${userName}`);
      playAgain();
      return;
    }
    console.log('Correct!');
    playRounds(acc + 1);
  };
  playRounds(0);
};

export default buildGame;
