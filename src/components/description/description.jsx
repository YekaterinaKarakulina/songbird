import React from 'react';

import './description.scss';
import Image from '../image';

const Description = (props) => {
  console.log(props);
  let selectedAnswer;
  if (props.answersData) {
    selectedAnswer = props.answersData.filter((item) => item.id === Number(props.selectedAnswerId))[0];
  }



  const descriptionBody = props.selectedAnswerId ? <div>
    <div className="row">
      <div className="col-md-6">
        <Image name={selectedAnswer.name} image={selectedAnswer.image} />
      </div>
      <div className="col-md-6">
        {console.log(selectedAnswer)}
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


  </div> :
    <div>Послушайте плеер. <br />
    Выберите птицу из списка</div>

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
