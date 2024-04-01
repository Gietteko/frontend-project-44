import readlineSync from 'readline-sync';

export const getRandomNum = () => {
  const max = 100;
  const min = 0;
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = getRandomNum();
    console.log(`Question: ${randomNum1}`);
    let rigthAnswer;

    if (randomNum1 % 2 === 0) {
      rigthAnswer = 'yes';
    } else if (randomNum1 % 2 !== 0) {
      rigthAnswer = 'no';
    }

    const answer = readlineSync.question('');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer:(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
