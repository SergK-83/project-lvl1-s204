import play from '../index';
import { randomNumInt } from '../templates';

const description = 'Balance the given number.';

// Balance the given number
const balanceNum = (arr) => {
  const elementsSum = arr.reduce((sum, current) => sum + current, 0);
  const balancedElem = (elementsSum - (elementsSum % arr.length)) / arr.length;
  const remain = elementsSum % arr.length;

  const balabcedArr = arr.map((item, i) => {
    if (i >= arr.length - remain) return balancedElem + 1;
    return balancedElem;
  });

  return balabcedArr.join('');
};

const gameGcd = () => {
  const numCount = randomNumInt(3, 4);
  const numArr = [];

  for (let i = 0; i < numCount; i += 1) {
    numArr.push(randomNumInt(0, 9));
  }

  const questionValue = numArr.join('');
  const correctAnswer = balanceNum(numArr);

  return { questionValue, correctAnswer };
};

export default () => play(gameGcd, description);
