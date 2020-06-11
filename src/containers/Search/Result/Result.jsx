/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint react/prop-types: 0 */

import React from 'react';
import classes from './Result.module.css';

const Result = ({ result }) => {
  const options = result.map((res) => (
    <div key={res.cardId} className={classes.resultContainer}>
      {res.img == null ? (
        <p>Image Missing</p>
      ) : (
        <img alt={`${res.name} Card`} src={res.img} />
      )}
      <div>
        <p>
          Name:
          {res.name}
        </p>
        <p>
          Cost:
          {res.cost}
        </p>
        <p>
          Set:
          {res.cardSet}
        </p>
      </div>
    </div>
  ));

  return <div className={classes.result}>{options}</div>;
};

export default Result;
