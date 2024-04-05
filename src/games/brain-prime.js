import readlineSync from 'readline-sync';
import { isPrime, getRandomNum } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNum();
    const randomNumIsPrime = isPrime(randomNum);
    console.log(`Question: ${randomNum}`);
    let rigthAnswer;

    if (randomNumIsPrime === true) {
      rigthAnswer = 'yes';
    } else if (randomNumIsPrime === false) {
      rigthAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer:(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
