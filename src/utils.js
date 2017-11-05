// Generation of an integer in the range from min to max
const randomNumInt = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

export default randomNumInt;
