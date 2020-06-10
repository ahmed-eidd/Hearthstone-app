import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './Result/Result';
import classes from './Search.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const Search = () => {
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
    // if (query && query.length > 1) {
    //   if (query.length % 2 === 0) {
    //     axios
    //       .get(
    //         `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${query}?collectible=1`,
    //         {
    //           headers: {
    //             "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    //             "x-rapidapi-key":
    //               "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a",
    //           },
    //         }
    //       )
    //       .then((res) => {
    //         setCards(res.data);
    //         console.log(res.data)
    //         setError(false)

    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setError(err.message);
    //       });
    // }
    // }
  };

  const onSumbitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .get(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${query}?collectible=1`,
        {
          headers: {
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key':
              '6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a',
          },
        }
      )
      .then((res) => {
        setCards(res.data);
        console.log(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  let suggestions = null;
  if (query) {
    suggestions = <Result result={cards} />;
  }
  if (error) {
    suggestions = <p>No Result...</p>;
  }

  let spinner = loading ? <Spinner /> : suggestions;

  return (
    <div className={classes.container}>
      <form onSubmit={onSumbitHandler}>
        <input
          className={classes.inputField}
          type="text"
          value={query}
          placeholder="Search For a Card"
          onChange={onChangeHandler}
        />
        <i className="fas fa-search" id={classes.inputFieldIcon}></i>
        
      </form>
      {spinner}
    </div>
  );
};

export default Search;
