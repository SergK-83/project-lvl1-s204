import play from '../index';
import { randomNumInt } from '../templates';

const description = 'What number is missing in this progression?';

const gameProgression = () => {
  const progressionArr = [];
  const diff = randomNumInt(0, 10);
  const elementsCount = 10;
  const elementX = randomNumInt(0, 9);

  progressionArr[0] = randomNumInt(0, 50);

  for (let i = 1; i < elementsCount; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + diff;
  }

  const correctAnswer = progressionArr[elementX];

  progressionArr[elementX] = '..';

  const questionValue = progressionArr.join(' ');

  return { questionValue, correctAnswer };
};

export default () => play(gameProgression, description);
