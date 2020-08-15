import React from 'react';

import './header.scss';

const Header = ({ score }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1 className="title">
        <span>Animal</span>
        <span>Farm</span>
      </h1>
      <div className="score">Счёт:
          <span> {score}</span>
      </div>
    </header>
  )
}

export default Header;
