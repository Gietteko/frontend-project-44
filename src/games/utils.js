export default () => {
  const max = 100;
  const min = 0;
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};
