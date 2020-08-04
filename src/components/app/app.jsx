import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';
import Answers from '../answers';
import Description from '../description';
import Button from '../button';

import { getQuestionData, getAnswersData } from '../../service';

import './app.scss';

export default class App extends React.Component {

  state = {
    questionNumber: 0,
    questionsAmount: 5,
    questionData: null,
    answersData: null,
    selectedAnswerId: null,
    isAnswerCorrect: false,
    incorrectAttemptsAmount: 0,
    answersState: [
      { id: 1, addClass: null },
      { id: 2, addClass: null },
      { id: 3, addClass: null },
      { id: 4, addClass: null },
      { id: 5, addClass: null },
      { id: 6, addClass: null },
    ]
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
    console.log(this.state);
    const newQuestionData = getQuestionData(questionNumber);
    const newAnswerData = getAnswersData(questionNumber);
    if (questionData !== newQuestionData && answersData !== newAnswerData)
      this.setState({
        questionData: newQuestionData,
        answersData: newAnswerData
      })
  }

  updateAnswersState = (answerId, className) => {
    this.setState(({ answersState }) => {
      const newAnswersState = answersState;
      const currentSelected = newAnswersState.filter((el) => el.id === answerId)
      const ind = newAnswersState.indexOf(currentSelected[0]);
      currentSelected[0].addClass = className;
      newAnswersState[ind] = currentSelected[0];
      return {
        answersState: newAnswersState
      }
    })
  }

  onAnswerClick = (event) => {
    console.log('onAnswerClickApp');
    const answerId = Number(event.target.getAttribute('data-id'));
    this.setState({
      selectedAnswerId: answerId
    })
    if (!this.state.isAnswerCorrect) {
      if (event.target.textContent === this.state.questionData.name) {
        this.updateAnswersState(answerId, 'correct');
        this.setState({
          isAnswerCorrect: true
        })
      } else {
        this.updateAnswersState(answerId, 'wrong');
      }
    }
  }

  onNextButtonClick = () => {
    console.log(`questionsAmount ${this.state.questionsAmount}, questionNumber ${this.state.questionNumber}`)
    if (this.state.isAnswerCorrect) {
      this.setState(({ questionNumber }) => {
        return {
          questionNumber: questionNumber += 1,
          selectedAnswerId: null,
          isAnswerCorrect: false,
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
  }

  filterSelectedAnswer = () => {
    const { answersData, selectedAnswerId } = this.state;
    return answersData
      .filter((item) => item.id === Number(selectedAnswerId))[0];
  }

  render() {
    console.log('render');
    console.log(this.state);

    const {
      questionNumber,
      questionData,
      answersData,
      isAnswerCorrect,
      selectedAnswerId,
      answersState } = this.state;

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

    return (
      <div className="container">
        <Header />
        <NavPanel questionNumber={questionNumber} />
        {question}
        <div className="row mx-0 my-3 p-3 main">
          {answers}
          {description}
        </div>
        <Button onNextButtonClick={this.onNextButtonClick} />
      </div>
    )
  }
}
