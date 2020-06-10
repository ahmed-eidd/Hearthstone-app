import React from "react";
import classes from "./Result.module.css";

const Result = (props) => {
  const options = props.result.map((res) => (
    <div key={res.cardId} className={classes.resultContainer}>
      
      {res.img ==null ? <p>Image Missing</p> : <img src={res.img} />}

      <div>
        
        <p>Name : {res.name}</p>
        <p>Cost : {res.cost}</p>
        <p>Set : {res.cardSet}</p>
      </div>
    </div>
  ));

  return <div className={classes.result}>{options}</div>;
};

export default Result;
