import React from 'react';

import './button.scss'

const Button = ({ title, disabled, onButtonClick }) => {

  return (
    <div className="d-flex my-3">
      <button
        type="button"
        className="btn btn-primary flex-fill"
        disabled={disabled}
        onClick={onButtonClick}>
        {title}
      </button>
    </div>
  )
}

export default Button;
