import React from 'react';

import Image from '../image';
import Button from '../button';

import './finish-screen.scss';

const FinishScreen = (props) => {
  const { score, maxScore, onAgainButtonClick } = props;

  const image = (score === maxScore) ?
    <Image name={"good job smile"} image={"../assets/great-job.png"} className=" smile" />
    : null;

  const againButton = (score !== maxScore) ? <Button
    disabled={false}
    onButtonClick={onAgainButtonClick}
    title="Попробовать еще раз" /> : null;

  return (
    <div className="d-flex flex-column mt-5 finishScreen">
      <h1 className="align-self-center">Поздравляем!</h1>
      <div className="score align-self-center">{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</div>
      {image}
      {againButton}
    </div>
  )
}

export default FinishScreen;
