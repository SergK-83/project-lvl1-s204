import readlineSync from 'readline-sync';
import { welcome, meetUser } from './index';

const checkEven = (num) => {
  return num % 2 === 0 ? true : false;
};

const answerToBool = (str) => {
  if (str === 'yes') return true;
  else if (str === 'no') return false;
};

export default () => {
  welcome();

  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const user = meetUser();

  for (let i = 0; i < 3; i++) {
    const questionValue = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${questionValue}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkEven(questionValue) !== answerToBool(answer)) return console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n Let\'s try again, Bill!');
  }
};
