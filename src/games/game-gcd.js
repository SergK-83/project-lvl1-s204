import play from '../index';
import { randomNumInt } from '../templates';

const description = 'Find the greatest common divisor of given numbers.';

// Find the greatest common divisor of given numbers
const findGcd = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  while (true) {
    if (max % min === 0) return min;
    else if ((max - min) > min) {
      max -= min;
    } else {
      const spareVar = min;
      min = max - min;
      max = spareVar;
    }
  }
};

const gameGcd = () => {
  const valFirst = randomNumInt(1, 100);
  const valSecond = randomNumInt(1, 100);
  const questionValue = `${valFirst}  ${valSecond}`;
  const correctAnswer = findGcd(valFirst, valSecond);

  return { questionValue, correctAnswer };
};

export default () => play(gameGcd, description);
