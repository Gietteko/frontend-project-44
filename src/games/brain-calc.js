import readlineSync from 'readline-sync';
import { getRandomExpression } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const expression = getRandomExpression();
    /* eslint-disable-next-line */
    const rigthValue = eval(expression);
    console.log(`Question: ${expression}`);
    const valueInAnswer = readlineSync.question('Your answer: ');
    const valueOfPlayer = parseInt(valueInAnswer, 10);

    if (valueOfPlayer === rigthValue) {
      console.log('Correct!');
    } else {
      console.log(`'${valueOfPlayer}' is wrong answer:(. Correct answer was '${rigthValue}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
