import React from 'react';

import './nav-panel.scss';

export default class NavPanel extends React.Component {
  render() {
    return (
      <nav className="nav nav-pills flex-column flex-sm-row">
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center active" href="#">Разминка</a>
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center" href="#">Воробьиные</a>
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center" href="#">Лесные птицы</a>
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center" href="#">Певчие птицы</a>
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center" href="#">Хищные птицы</a>
        <a className="flex-sm-fill text-sm-center nav-link d-flex justify-content-center" href="#">Морские птицы</a>
      </nav>
    )
  }
}
