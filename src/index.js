import readlineSync from 'readline-sync';

const getRandomNum = () => {
  const max = 100;
  const min = 0;
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};

export const parityTest = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = getRandomNum();
    console.log(`Question: ${randomNum1}`);
    let rigthAnswer;

    if (randomNum1 % 2 === 0) { // привязываем правильные ответы к случайному числу до ответа игрока
      rigthAnswer = 'yes';
    } else if (randomNum1 % 2 !== 0) {
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
const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};
const getRandomExpression = () => {
  const part1 = getRandomNum();
  const part2 = getRandomSymbol();
  const part3 = getRandomNum();
  const randomExpression = `${part1} ${part2} ${part3}`;
  return randomExpression;
};
export const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const expression = getRandomExpression();
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
const dividersOfNum = (num) => {
  const dividers = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

const gcdOfNum = (num1, num2) => {
  const dividers1 = dividersOfNum(num1);
  const dividers2 = dividersOfNum(num2);
  const commonDividers = [];
  /* eslint-disable-next-line */
  for (const item of dividers1) {
    if (dividers2.includes(item)) {
      commonDividers.push(item);
    }
  }
  return commonDividers[commonDividers.length - 1];
};

export const gcd = () => {
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
