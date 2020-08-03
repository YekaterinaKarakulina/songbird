import birdData from './data';

const getQuestionData = (questionNumber) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(6));
  const currentData = birdData[questionNumber][randomNumber];
  console.log(currentData);
  return currentData;
}

export {
  getQuestionData
};
