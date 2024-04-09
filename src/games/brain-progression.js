import playGame from '../index.js';
import getRandomNum from './utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (start = 1, countOfMembers = 5, difference = 2) => {
  const members = [];
  for (let i = 0; i <= (countOfMembers - 1); i += 1) {
    members.push(start + difference * i);
  }
  return members;
};

const playProgression = () => {
  const start = getRandomNum(0, 10);
  const difference = getRandomNum(0, 5);
  const countOfMembers = 7;
  const hiddenIndex = getRandomNum(0, countOfMembers);
  const progression = getProgression(start, countOfMembers, difference);
  const correctAnswer = String(progression[hiddenIndex - 1]);
  progression[hiddenIndex - 1] = '..';
  const question = String(progression.join(' '));
  return [question, correctAnswer];
};

export default () => {
  playGame(playProgression, task);
};
