import React from 'react';
import classes from './Result.module.css'

const Result = (props) => {

  const options = props.result.map( res =>(
    <li key={res.cardId}>
      {res.name}
    </li>
  ))

  return (
    <ul className={classes.resultList}>
     {options} 
    </ul>
  )
}

export default Result;
