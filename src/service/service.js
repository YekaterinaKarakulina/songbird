import birdData from './data';

const getQuestionData = (questionNumber) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(6));
  const questionData = birdData[questionNumber][randomNumber];
  return questionData;
}

const getAnswersData = (questionNumber) => {
  const answersData = birdData[questionNumber].sort(() => Math.random() - 0.5);
  return answersData;
}

export {
  getQuestionData,
  getAnswersData
};
