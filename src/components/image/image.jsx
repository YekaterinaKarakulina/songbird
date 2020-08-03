import React from 'react';

const Image = (props) => {
  const { image, name } = props;
  return (
    <img className="align-self-center" src={image} alt={name} />
  )
}

export default Image;
