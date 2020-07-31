import React from 'react';

import Header from '../header';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}
