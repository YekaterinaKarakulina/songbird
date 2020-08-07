import React from 'react';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="title">
          <span>Animal</span>
          <span>Farm</span>
        </h1>
        <div className="score">Счёт:
          <span> {this.props.score}</span>
        </div>
      </header>
    )
  }
}
