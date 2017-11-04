import readlineSync from 'readline-sync';

export default (game, description) => {
  console.log('Welcome to the Brain Games! \n');

  if (description) console.log(`${description} \n`);

  const user = readlineSync.question('May I have your name?: ');

  console.log(`\nHello, ${user}! \n`);

  if (game) {
    for (let i = 0; i < 3; i += 1) {
      // func game returns object{questionValue, correctAnswer}
      const { questionValue, correctAnswer } = game();

      console.log(`Question: ${questionValue}`);

      const answer = (readlineSync.question('Your answer: ')).toLowerCase();

      if (answer === String(correctAnswer)) console.log('Correct! \n');
      else {
        console.log(`\n'${answer}' is wrong answer ;(. \nCorrect answer was '${correctAnswer}'. \n\nLet's try again, ${user}!`);
        return;
      }
    }

    console.log(`Congratulations, ${user}!`);
  }
};
