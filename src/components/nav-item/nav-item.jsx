import React from 'react';

const NavItem = (props) => {
  let classNames = 'flex-sm-fill text-sm-center nav-link d-flex justify-content-center';
  if (props.isActive) {
    classNames += ' active';
  }

  return (
    <a className={classNames} href="#">{props.title}</a>
  )
}

export default NavItem;
