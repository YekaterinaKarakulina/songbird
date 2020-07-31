import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NavPanel />
        <Question />
      </div>
    )
  }
}
