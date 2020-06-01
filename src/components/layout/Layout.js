import React from 'react';
import Nav from '../UI/Nav/Nav';

const Layout = (props) => {
return (
  <div>
      <Nav/>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout;
