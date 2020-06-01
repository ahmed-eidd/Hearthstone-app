import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink to='/'>Classes</NavLink>
      <NavLink to='/search'>Search</NavLink>
    </div>
  )
}

export default Nav
