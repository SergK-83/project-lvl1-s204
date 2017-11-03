import readlineSync from 'readline-sync';
import { welcome, meetUser } from './index';

const checkEven = num => (num % 2 === 0 ? true : false);

const answerToBool = (str) => {
  if (str === 'yes') return true;
  else if (str === 'no') return false;
};

const findСorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  welcome();

  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const user = meetUser();

  for (let i = 0; i < 3; i += 1) {
    const questionValue = Math.floor((Math.random() * 100) + 1);

    console.log(`Question: ${questionValue}`);

    const answer = (readlineSync.question('Your answer: ')).toLowerCase();
    const correctAnswer = findСorrectAnswer(questionValue);

    if (checkEven(questionValue) !== answerToBool(answer)) return console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`);

    console.log('Correct! \n');
  }

  return console.log(`Congratulations, ${user}!`);
};
