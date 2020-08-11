import React from 'react';

import NavItem from '../nav-item';

import './nav-panel.scss';

const NavPanel = ({ questionNumber }) => {

  const navData = [
    { id: 0, title: "Животные Африки" },
    { id: 1, title: "Животные Сибири" },
    { id: 2, title: "Приматы" },
    { id: 3, title: "Животные фермы" },
    { id: 4, title: "Птицы" },
    { id: 5, title: "Насекомые" },
  ];

  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      {navData.map(({ id, title }, index) => {
        let isActive = false;
        if (index === questionNumber) {
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

export default NavPanel;
