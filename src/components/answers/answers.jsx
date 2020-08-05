import React from 'react';

import Answer from '../answer';

import './answers.scss';

export default class Answers extends React.Component {
  render() {
    return (
      <ul className="list-group col-md-6 pr-0 pr-md-2">
        {this.props.answersData.map(({ id, name }, index) => {
          const addClass = this.props.answersState[index].addClass;
          return (
            <Answer
              id={id}
              key={id}
              title={name}
              addClass={addClass}
              onAnswerClick={this.props.onAnswerClick}
            />
          )
        }
        )}
      </ul>
    )
  }
}
