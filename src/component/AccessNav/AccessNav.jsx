import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AccessNav.module.css';
function isActive({ isActive }) {
  return isActive ? `${css.accessLink} ${css.active}` : `${css.accessLink}`;
}
function AccessNav() {
  return (
    <>
      <NavLink className={isActive} to="/register">
        Sign up
      </NavLink>
      <NavLink className={isActive} to="/login">
        Log in
      </NavLink>
    </>
  );
}

export default AccessNav;
