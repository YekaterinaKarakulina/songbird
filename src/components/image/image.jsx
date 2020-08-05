import React from 'react';

const Image = (props) => {
  const { image, name, className } = props;
  let classNames = 'align-self-center';
  if (className) {
    classNames += className
  }

  return (
    <img className={classNames} src={image} alt={name} />
  )
}

export default Image;
