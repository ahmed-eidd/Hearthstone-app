/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({ totalCards, CardsPerPage, Paginate, paginationActive }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / CardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.container}>
      <ul>
        {pageNumbers.map( number => (
          <li key={number} onClick={() => Paginate(number)} className={number === paginationActive ? [classes.containerList, classes.active].join(' ') : classes.containerList}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
