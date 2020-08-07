import animalsData from '../data/data';

const getQuestionData = (questionNumber) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(6));
  const questionData = animalsData[questionNumber][randomNumber];
  console.log(`Правильный ответ: ${questionData.name}`);
  return questionData;
}

const getAnswersData = (questionNumber) => {
  const answersData = animalsData[questionNumber];
  return answersData;
}

export {
  getQuestionData,
  getAnswersData
};
