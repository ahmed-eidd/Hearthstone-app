import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./Result/Result";
import classes from './Search.module.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  const onChangeHandler = (event, query) => {
    setQuery(event.target.value);
    if (query && query.length > 1) {
      if (query.length % 2 === 0) {
        axios
          .get(
            `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${query}?collectible=1`,
            {
              headers: {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a",
              },
            }
          )
          .then((res) => {
            setCards(res.data);
            console.log(res.data)
            setError(false)
            
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          });
      }
    }
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
  };

  let suggestions = null;
  if (query) {
    suggestions = <Result result={cards} />;
  }
  if (error) {
    suggestions = <p >No Result...</p>;
  }

  

  return (
    <div className={classes.container} >
      <form onSubmit={(event) => onSumbitHandler(event)}>
        <input
          className={classes.inputField}
          type="text"
          value={query}
          placeholder="Search For a Card"
          onChange={(event) => onChangeHandler(event, query)}
        />
        <i className="fas fa-search" id={classes.inputFieldIcon}></i>
      </form>
      {suggestions}
    </div>
  );
};

export default Search;
