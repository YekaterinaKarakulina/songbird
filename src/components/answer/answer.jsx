/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Answer = ({ addClass, id, title, onAnswerClick }) => {

  let classNames = "li-button ";
  if (addClass) {
    classNames += addClass
  }
  return (
    <li
      data-id={id}
      className="list-group-item"
      onClick={onAnswerClick}>
      <span className={classNames} />
      {title}
    </li>
  )
}

export default Answer;
