#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
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
export default playGame;
