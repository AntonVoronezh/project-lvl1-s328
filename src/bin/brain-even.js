#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Welcome to Brain Games! \n Answer "yes" if number even otherwise answer "no".');
const userName = readlineSync.question('May I have your name? ');
console.log(`\n Hello!${userName}`);

const playGame = (acc) => {
  if (acc === 3) {
    return `\n Congratulations ${userName}!`;
  }
  const randomNum = Math.floor(Math.random() * 10);
  console.log(`\n Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return playGame(acc + 1);
  }
  return `'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}`;
};
console.log(playGame(0));
