
import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';
import Answers from '../answers';
import Description from '../description';
import Button from '../button';
import FinishScreen from '../finish-screen';

import { getQuestionData, getAnswersData } from '../../service';

import './app.scss';

export default class App extends React.Component {

  // eslint-disable-next-line react/state-in-constructor
  state = {
    questionNumber: 0,
    questionsAmount: 5,
    questionData: null,
    answersData: null,
    selectedAnswerId: null,
    isAnswerCorrect: false,
    answersState: [
      { id: 1, addClass: null },
      { id: 2, addClass: null },
      { id: 3, addClass: null },
      { id: 4, addClass: null },
      { id: 5, addClass: null },
      { id: 6, addClass: null },
    ],
    score: 0,
    currentScore: 5,
    maxScore: 30,
    isNextButtonDisabled: true,
    isGameFinished: false,
  }

  componentDidMount() {
    const { questionNumber } = this.state;
    this.setState({
      questionData: getQuestionData(questionNumber),
      answersData: getAnswersData(questionNumber)
    })
  }

  componentDidUpdate() {
    const { questionNumber, questionData, answersData } = this.state;
    const newAnswerData = getAnswersData(questionNumber);
    if (answersData !== newAnswerData) {
      const newQuestionData = getQuestionData(questionNumber);
      if (questionData !== newQuestionData) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          questionData: newQuestionData,
          answersData: newAnswerData
        })
      }
    }
  }

  updateAnswersState = (answerId, className) => {
    this.setState(({ answersState }) => {
      const newAnswersState = answersState;
      const currentSelected = newAnswersState.filter((el) => el.id === answerId)
      const ind = newAnswersState.indexOf(currentSelected[0]);
      currentSelected[0].addClass = className;
      // eslint-disable-next-line prefer-destructuring
      newAnswersState[ind] = currentSelected[0];
      return {
        answersState: newAnswersState
      }
    })
  }

  onAnswerClick = (event) => {

    const { isAnswerCorrect, questionData, answersState } = this.state;

    const answerId = Number(event.target.getAttribute('data-id'));

    this.setState({
      selectedAnswerId: answerId
    })

    if (!isAnswerCorrect) {
      if (event.target.textContent === questionData.name) {
        this.updateAnswersState(answerId, 'correct');
        new Audio("../assets/correct.mp3").play();
        this.setState(({ currentScore, score }) => {
          return {
            score: score + currentScore,
            isAnswerCorrect: true,
            isNextButtonDisabled: false,
          }
        })
      } else {
        new Audio("../assets/error.mp3").play();
        const newAnswersState = answersState;
        const currentSelected = newAnswersState.filter((el) => el.id === answerId);
        if (currentSelected[0].addClass === null) {
          this.setState(({ currentScore }) => {
            return {
              currentScore: currentScore - 1
            }
          })
          this.updateAnswersState(answerId, 'wrong');
        }
      }
    }
  }

  onNextButtonClick = () => {
    const { questionsAmount, questionNumber, isAnswerCorrect } = this.state;
    if (isAnswerCorrect && questionsAmount > questionNumber) {
      // eslint-disable-next-line no-shadow
      this.setState(({ questionNumber }) => {
        return {
          currentScore: 5,
          questionNumber: questionNumber + 1,
          selectedAnswerId: null,
          isAnswerCorrect: false,
          isNextButtonDisabled: true,
          answersState: [
            { id: 1, addClass: null },
            { id: 2, addClass: null },
            { id: 3, addClass: null },
            { id: 4, addClass: null },
            { id: 5, addClass: null },
            { id: 6, addClass: null },
          ]
        }
      })
    } else {
      this.setState({
        isGameFinished: true
      })
    }
  }

  onAgainButtonClick = () => {
    this.setState(() => {
      return {
        score: 0,
        currentScore: 5,
        questionNumber: 0,
        selectedAnswerId: null,
        isAnswerCorrect: false,
        isNextButtonDisabled: true,
        isGameFinished: false,
        answersState: [
          { id: 1, addClass: null },
          { id: 2, addClass: null },
          { id: 3, addClass: null },
          { id: 4, addClass: null },
          { id: 5, addClass: null },
          { id: 6, addClass: null },
        ]
      }
    })
  }

  filterSelectedAnswer = () => {
    const { answersData, selectedAnswerId } = this.state;
    return answersData
      .filter((item) => item.id === Number(selectedAnswerId))[0];
  }

  render() {
    const {
      score, maxScore,
      questionNumber, questionData, answersData,
      isAnswerCorrect, selectedAnswerId, answersState,
      isNextButtonDisabled, isGameFinished } = this.state;

    const question = questionData ? <Question
      name={questionData.name}
      image={questionData.image}
      audio={questionData.audio}
      isAnswerCorrect={isAnswerCorrect} /> : null;

    const answers = answersData ? <Answers
      answersData={answersData}
      onAnswerClick={this.onAnswerClick}
      answersState={answersState}
    /> : null;

    const description = selectedAnswerId ? <Description
      selectedAnswerData={this.filterSelectedAnswer()}
    /> : <Description selectedAnswerData={undefined} />

    const mainComponent = isGameFinished ?
      <FinishScreen
        score={score}
        maxScore={maxScore}
        onAgainButtonClick={this.onAgainButtonClick} />
      :
      <>
        {question}
        <div className="row mx-0 my-3 p-3 main">
          {answers}
          {description}
        </div>
        <Button
          disabled={isNextButtonDisabled}
          onButtonClick={this.onNextButtonClick}
          title="Далее" />
      </>

    return (
      <div className="container">
        <Header score={score} />
        <NavPanel questionNumber={questionNumber} />
        {mainComponent}
      </div>
    )
  }
}
