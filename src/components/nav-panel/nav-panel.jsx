import React from 'react';

import NavItem from '../nav-item';
import './nav-panel.scss';

export default class NavPanel extends React.Component {

  render() {
    const navData = [
      { id: 0, title: "Разминка" },
      { id: 1, title: "Воробьиные" },
      { id: 2, title: "Лесные птицы" },
      { id: 3, title: "Певчик птицы" },
      { id: 4, title: "Хищные птицы" },
      { id: 5, title: "Морские птицы" },
    ];

    return (
      <nav className="nav nav-pills flex-column flex-sm-row">
        {navData.map(({ id, title }, index) => {
          let isActive = false;
          if (index === this.props.questionNumber) {
            isActive = true;
          }
          return (
            <NavItem key={id} title={title} isActive={isActive} />
          )
        }
        )}
      </nav>
    )
  }
}
