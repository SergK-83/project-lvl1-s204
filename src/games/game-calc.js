import play from '../index';
import { randomNumInt } from '../templates';

const description = 'What is the result of the expression?';

const gameCalc = () => {
  const valFirst = randomNumInt(1, 100);
  const valSecond = randomNumInt(1, 100);
  const operator = randomNumInt(1, 3);

  switch (operator) {
    case 1:
      return {
        questionValue: `${valFirst} - ${valSecond}`,
        correctAnswer: `${valFirst - valSecond}`,
      };
    case 2:
      return {
        questionValue: `${valFirst} * ${valSecond}`,
        correctAnswer: `${valFirst * valSecond}`,
      };
    case 3:
      return {
        questionValue: `${valFirst} + ${valSecond}`,
        correctAnswer: `${valFirst + valSecond}`,
      };
    default:
      return {
        questionValue: `${valFirst} + ${valSecond}`,
        correctAnswer: `${valFirst + valSecond}`,
      };
  }
};

export default () => play(gameCalc, description);
