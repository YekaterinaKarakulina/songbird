import React from 'react';

import './answers.scss';
import Answer from '../answer';

export default class Answers extends React.Component {

  render() {
    console.log(this.props.answersData);

    return (
      <ul className="list-group col-md-6">
        {this.props.answersData.map(({ id, name }) => {
          return (
            <Answer key={id} title={name} onAnswerClick={this.props.onAnswerClick} />
          )
        })}
      </ul>
    )
  }
}
