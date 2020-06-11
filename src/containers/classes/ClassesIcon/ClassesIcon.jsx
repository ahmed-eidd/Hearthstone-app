import React from 'react';

const ClassesIcon = props => (
  <li onClick={props.iconClicked} className={props.iconClasses}>
    {props.children}
  </li>
);

export default ClassesIcon;
