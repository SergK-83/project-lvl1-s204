import play from '../index';
import { randomNumInt } from '../templates';

const description = 'Answer "yes" if number even otherwise answer "no".';

const gameEven = () => {
  const questionValue = randomNumInt(1, 100);

  const correctAnswer = questionValue % 2 ? 'no' : 'yes';

  return { questionValue, correctAnswer };
};

export default () => play(gameEven, description);
