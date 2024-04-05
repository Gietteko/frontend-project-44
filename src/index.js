export const getRandomNum = () => {
  const max = 100;
  const min = 0;
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};

export const getRandomSymbol = () => {
  const symbols = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

export const getRandomExpression = () => {
  const part1 = getRandomNum();
  const part2 = getRandomSymbol();
  const part3 = getRandomNum();
  const randomExpression = `${part1} ${part2} ${part3}`;
  return randomExpression;
};

export const dividersOfNum = (num) => {
  const dividers = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

export const gcdOfNum = (num1, num2) => {
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

export const getRandomProgression = () => {
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
  const length = 10;
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const getRandomIndexOfArr = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};

export const getNewArr = (arr, index) => {
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

export const isPrime = (num) => {
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
