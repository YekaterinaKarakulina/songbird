import React from 'react';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="title">
          <span>Song</span>
          <span>Bird</span>
        </h1>
        <div className="score">Score:
          <span> 0</span>
        </div>
      </header>
    )
  }
}
