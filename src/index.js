import readlineSync from 'readline-sync';

const getRandomNum = () => {
  const max = 100;
  const min = 0;
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
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

const getRandomProgression = () => {
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
  const length = 10;
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRandomIndexOfArr = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};

const getNewArr = (arr, index) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === index) {
      newArr.push('..');
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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

    if (randomNum1 % 2 === 0) {
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

export const progression = () => {
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

export const prime = () => {
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
