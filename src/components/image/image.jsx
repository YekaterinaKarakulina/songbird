import React from 'react';

const Image = (props) => {
  const { image, name, isAnswerCorrect } = props;
  if (isAnswerCorrect) {
    return (
      <img className="align-self-center" src={image} alt={name} />
    )
  }
  return (
    <img className="align-self-center" src="../assets/bird.js" alt={'bird image'} />
  )
}

export default Image;
