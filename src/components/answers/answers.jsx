import React from 'react';

import './answers.scss';

export default class Answers extends React.Component {
  render() {
    return (

      <ul className="list-group col-md-6">
        <li className="list-group-item">
          <span className="li-button"></span>
          Ворон
        </li>
        <li className="list-group-item">
          <span className="li-button"></span>
          Журавль
        </li>
        <li className="list-group-item">
          <span className="li-button"></span>
          Ласточка
        </li>
        <li className="list-group-item">
          <span className="li-button"></span>
          Козодой
        </li>
        <li className="list-group-item">
          <span className="li-button"></span>
          Кукушка
        </li>
        <li className="list-group-item">
          <span className="li-button"></span>
          Синица
        </li>
      </ul>


    )
  }
}
