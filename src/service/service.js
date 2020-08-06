import birdData from './data';

const getQuestionData = (questionNumber) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(6));
  const questionData = birdData[questionNumber][randomNumber];
  console.log(`--- ${questionData.name} --- `);
  return questionData;
}

const getAnswersData = (questionNumber) => {
  const answersData = birdData[questionNumber];
  return answersData;
}

export {
  getQuestionData,
  getAnswersData
};
