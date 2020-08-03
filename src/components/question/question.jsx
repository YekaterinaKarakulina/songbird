import React from 'react';

import './question.scss';

const Question = (props) => {
  console.log(props);
  const { name, image, audio } = props;

  return (
    <div className="question d-flex flex-column flex-sm-row p-3">
      <img className="align-self-center" src={image} alt={name} />
      <div className="d-flex flex-column mx-3 flex-fill">
        <div className="stars mt-3 mt-sm-0">{props.name}</div>
        <div className="hr"></div>
        <audio controls className="mt-3">
          <source src={audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
            </audio>
      </div>

    </div>
  )

}

export default Question;
