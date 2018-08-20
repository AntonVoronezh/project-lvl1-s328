import readlineSync from 'readline-sync';

const actual = readlineSync.question('May I have your name? ');
console.log('Hello, ' + actual);