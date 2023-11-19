import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AccessNav.module.css';

function AccessNav() {
  return (
    <>
      <NavLink className={css.accessLink} to="/register">
        Sign up
      </NavLink>
      <NavLink className={css.accessLink} to="/login">
        Log in
      </NavLink>
    </>
  );
}

export default AccessNav;
