import React from 'react';

import Header from '../header';
import NavPanel from '../nav-panel';
import Question from '../question';
import Answers from '../answers';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NavPanel />
        <Question />
        <div className="row mx-0 my-3 p-3 main">
          <Answers />


        </div>
      </div>
    )
  }
}
