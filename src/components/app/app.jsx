import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';
import Answers from '../answers';
import Description from '../description';
import Button from '../button';



import { getQuestionData } from '../service/service';

import './app.scss';

export default class App extends React.Component {

  state = {
    questionNumber: 0,
    data: null,
    isAnswerCorrect: false,
    incorrectAttemptsAmount: 0
  }

  componentDidMount() {
    this.setState({
      data: getQuestionData(this.state.questionNumber)
    })
  }

  render() {

    const { data } = this.state;
    const question = data ? <Question
      name={data.name}
      image={data.image}
      audio={data.audio}
      isAnswerCorrect={this.state.isAnswerCorrect} /> : null;

    return (
      <div className="container">
        <Header />
        <NavPanel />

        {question}

        <div className="row mx-0 my-3 p-3 main">
          <Answers />
          <Description />
        </div>
        <Button />

      </div>
    )
  }
}
