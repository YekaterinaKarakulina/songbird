import React from 'react';

const NavItem = ({ isActive, title }) => {
  let classNames = 'flex-sm-fill text-sm-center nav-link d-flex justify-content-center';
  if (isActive) {
    classNames += ' active';
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={classNames} href="#">{title}</a>
  )
}

export default NavItem;
