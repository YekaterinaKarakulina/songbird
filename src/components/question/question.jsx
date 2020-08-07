import React from 'react';

import Image from '../image';
import Player from '../audio-player';

import './question.scss';

export default class Question extends React.Component {

  render() {

    const { name, image, audio, isAnswerCorrect } = this.props;

    const imageComponent = isAnswerCorrect ?
      <Image name={name} image={image} /> :
      <Image name={"bird image"} image={"../assets/question.png"} />

    return (
      <div className="question d-flex flex-column flex-sm-row p-3">
        {imageComponent}
        <div className="d-flex flex-column mx-3 flex-fill">
          <div className="stars mt-3 mt-sm-0">{isAnswerCorrect ? name : '*****'}</div>
          <div className="hr"></div>
          <Player audio={audio} isAnswerCorrect={isAnswerCorrect} />
        </div>
      </div>
    )
  }
}

