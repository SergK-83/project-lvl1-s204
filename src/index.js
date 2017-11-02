import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};

const meetUser = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`\nHello, ${userName}! \n`);

  return userName;
};

export { welcome, meetUser };
