import play from '../index';
import { randomNumInt } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

// Find the greatest common divisor of given numbers
const findGcd = (numFirst, numSec) => {
  let a = numFirst;
  let b = numSec;

  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

const gameGcd = () => {
  const valFirst = randomNumInt(1, 100);
  const valSecond = randomNumInt(1, 100);
  const questionValue = `${valFirst}  ${valSecond}`;
  const correctAnswer = findGcd(valFirst, valSecond);

  return { questionValue, correctAnswer };
};

export default () => play(gameGcd, description);
