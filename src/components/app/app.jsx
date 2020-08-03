import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';
import Answers from '../answers';
import Description from '../description';
import Button from '../button';

import { getQuestionData, getAnswersData } from '../service/service';

import './app.scss';

export default class App extends React.Component {

  state = {
    questionNumber: 0,
    questionData: null,
    answersData: null,
    isAnswerCorrect: false,
    incorrectAttemptsAmount: 0
  }

  componentDidMount() {
    this.setState({
      questionData: getQuestionData(this.state.questionNumber),
      answersData: getAnswersData(this.state.questionNumber)
    })
  }

  onAnswerClick = (event) => {
    console.log('onAnswerClickApp');
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

  render() {

    const { questionData, answersData } = this.state;
    const question = questionData ? <Question
      name={questionData.name}
      image={questionData.image}
      audio={questionData.audio}
      isAnswerCorrect={this.state.isAnswerCorrect} /> : null;

    const answers = answersData ? <Answers
      answersData={answersData}
      onAnswerClick={this.onAnswerClick}
    /> : null;

    return (
      <div className="container">
        <Header />
        <NavPanel questionNumber={this.state.questionNumber} />
        {question}
        <div className="row mx-0 my-3 p-3 main">
          {answers}
          <Description />
        </div>
        <Button />
      </div>
    )
  }
}
