import React from 'react';

import Image from '../image';
import './description.scss';

const Description = (props) => {
  console.log(props.selectedAnswerData);
  let selectedAnswer;
  if (props.selectedAnswerData) {
    selectedAnswer = props.selectedAnswerData;
  }

  const descriptionBody = props.selectedAnswerData ? <div>
    <div className="row">
      <div className="col-md-6">
        <Image name={selectedAnswer.name} image={selectedAnswer.image} />
      </div>
      <div className="col-md-6">
        <h4>{selectedAnswer.name}</h4>
        <div className="hr"></div>
        <div>{selectedAnswer.species}</div>
        <div className="hr"></div>
        <audio controls className="mt-3">
          <source src={selectedAnswer.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
          </audio>
      </div>
    </div>
    <p>{selectedAnswer.description}</p>
  </div> : <div>
      Послушайте плеер.
    <br />
    Выберите птицу из списка
  </div>

  return (
    <div className="description col-md-6 pl-0">
      <ul className="list-group">
        <li className="list-group-item">
          {descriptionBody}
        </li>
      </ul>
    </div>
  )
}

export default Description;
