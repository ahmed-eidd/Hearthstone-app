import React from "react";
import classes from "./Result.module.css";

const Result = (props) => {
  const options = props.result.map((res) => (
    <div key={res.cardId} className={classes.resultContainer}>
      <img src={res.img} />
      <div>
        <p>Name : {res.name}</p>
        <p>Cost : {res.cost}</p>
        <p>Class : {res.playerClass}</p>
      </div>
    </div>
  ));

  return <div className={classes.result}>{options}</div>;
};

export default Result;
