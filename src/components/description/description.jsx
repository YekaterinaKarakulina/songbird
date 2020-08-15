import React from 'react';

import Image from '../image';
import Player from '../audio-player';

import './description.scss';

const Description = ({ selectedAnswerData }) => {
  let selectedAnswer;

  if (selectedAnswerData) {
    selectedAnswer = selectedAnswerData;
  }

  const descriptionBody = selectedAnswerData ? <div>
    <div className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-between pb-3">
      <div className="d-flex flex-column">
        <Image name={selectedAnswer.name} image={selectedAnswer.image} />
      </div>
      <div className="d-flex flex-column flex-fill pl-0 pl-sm-3 pl-md-0 pl-lg-3">
        <h4>{selectedAnswer.name}</h4>
        <div className="hr dark" />
        <div>{selectedAnswer.species}</div>
        <div className="hr dark" />
        <Player audio={selectedAnswer.audio} />
      </div>
    </div>
    <p>{selectedAnswer.description}</p>
  </div> : <div>
      Послушайте плеер.
    <br />
    Выберите из списка кто издает данный звук.
  </div>

  return (
    <div className="description col-md-6 px-0">
      <ul className="list-group">
        <li className="list-group-item">
          {descriptionBody}
        </li>
      </ul>
    </div>
  )
}

export default Description;
