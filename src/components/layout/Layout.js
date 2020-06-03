import React from 'react';
import Nav from '../UI/Nav/Nav';
import classes from './Layout.module.css'

const Layout = (props) => {
return (
  <div>
      <Nav/>
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout;
