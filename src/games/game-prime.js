import play from '../index';
import { randomNumInt } from '../utils';

const description = 'Is it a simple number? (yes or no)';

// check Is there a simple number?
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const gamePrime = () => {
  const num = randomNumInt(2, 100);

  const correctAnswer = isPrime(num);

  const questionValue = num;

  return { questionValue, correctAnswer };
};

export default () => play(gamePrime, description);
