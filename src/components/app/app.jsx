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
    questionData: null,
    answersData: null,
    selectedAnswerId: null,
    isAnswerCorrect: false,
    incorrectAttemptsAmount: 0
  }

  componentDidMount() {
    const { questionNumber } = this.state;

    this.setState({
      questionData: getQuestionData(questionNumber),
      answersData: getAnswersData(questionNumber)
    })
  }

  onAnswerClick = (event) => {
    console.log('onAnswerClickApp');
    console.log(`id ${event.target.getAttribute('data-id')}`);
    this.setState({
      selectedAnswerId: event.target.getAttribute('data-id')
    })
    if (!this.state.isAnswerCorrect) {
      if (event.target.textContent === this.state.questionData.name) {
        console.log('correct');
        event.target.querySelector('.li-button').classList.add('correct');
        this.setState({
          isAnswerCorrect: true
        })
      } else {
        console.log('wrong');
        event.target.querySelector('.li-button').classList.add('wrong');
      }
    }
  }

  filterSelectedAnswer = () => {
    const { answersData, selectedAnswerId } = this.state;
    return answersData
      .filter((item) => item.id === Number(selectedAnswerId))[0];
  }

  render() {

    const {
      questionNumber,
      questionData,
      answersData,
      isAnswerCorrect,
      selectedAnswerId } = this.state;

    const question = questionData ? <Question
      name={questionData.name}
      image={questionData.image}
      audio={questionData.audio}
      isAnswerCorrect={isAnswerCorrect} /> : null;

    const answers = answersData ? <Answers
      answersData={answersData}
      onAnswerClick={this.onAnswerClick}
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
        <Button />
      </div>
    )
  }
}
