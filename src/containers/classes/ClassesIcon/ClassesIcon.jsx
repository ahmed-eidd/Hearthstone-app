import React from 'react'
import classes from './ClassesIcon.module.css';

const ClassesIcon = (props) => {
  return (
    <li onClick={props.iconClicked} className={props.classes}>
      {props.children}
    </li>
  )
}

export default ClassesIcon
