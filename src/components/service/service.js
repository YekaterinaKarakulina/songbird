import birdData from './data';

const getQuestionData = (questionNumber) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(6));
  const questionData = birdData[questionNumber][randomNumber];
  console.log(questionData);
  return questionData;
}

export {
  getQuestionData
};
