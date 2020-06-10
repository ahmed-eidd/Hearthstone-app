import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
const Nav = () => {
  return (
    <div className={classes.Container}>
      <NavLink
        to="/"
        exact
        className={classes.navlink}
        activeClassName={classes.active}
      >
        Classes
      </NavLink>
      <NavLink
        to="/search"
        className={classes.navlink}
        activeClassName={classes.active}
      >
        Search
      </NavLink>
    </div>
  );
};

export default Nav;
