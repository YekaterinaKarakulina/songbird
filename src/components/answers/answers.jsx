
import React from 'react';

import Answer from '../answer';

import './answers.scss';

const Answers = ({ answersData, answersState, onAnswerClick }) => {

  return (
    <ul className="list-group col-md-6 pr-0 pr-md-2">
      {answersData.map(({ id, name }, index) => {
        const { addClass } = answersState[index];
        return (
          <Answer
            id={id}
            key={id}
            title={name}
            addClass={addClass}
            onAnswerClick={onAnswerClick}
          />
        )
      }
      )}
    </ul>
  )
}

export default Answers;
