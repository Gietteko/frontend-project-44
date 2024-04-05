import readlineSync from 'readline-sync';
import { gcdOfNum, getRandomNum } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const rigthAnswer = gcdOfNum(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const valueInAnswer = readlineSync.question('Your answer: ');
    const valueOfPlayer = parseInt(valueInAnswer, 10);

    if (valueOfPlayer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${valueOfPlayer}' is wrong answer:(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
