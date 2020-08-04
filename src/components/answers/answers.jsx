import React from 'react';

import Answer from '../answer';
import './answers.scss';

export default class Answers extends React.Component {

  render() {
    //console.log(this.props.answersData);

    return (
      <ul className="list-group col-md-6 pr-0 pr-md-2">
        {this.props.answersData.map(({ id, name }) => {
          return (
            <Answer id={id} key={id} title={name} onAnswerClick={this.props.onAnswerClick} />
          )
        }
        )}
      </ul>
    )
  }
}
