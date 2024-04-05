import readlineSync from 'readline-sync';
import { getRandomProgression, getRandomIndexOfArr, getNewArr } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomProgression = getRandomProgression();
    const randomIndexOfProgression = getRandomIndexOfArr(randomProgression);
    const newProgression = getNewArr(randomProgression, randomIndexOfProgression);
    const newProgressionStr = newProgression.join(' ');
    console.log(`Question: ${newProgressionStr}`);
    const valueInAnswer = readlineSync.question('Your answer: ');
    const rigthAnswer = randomProgression[randomIndexOfProgression];
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
