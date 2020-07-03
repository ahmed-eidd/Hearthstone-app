import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Result from './Result/Result';
import classes from './Search.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const Search = () => {
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef('')

  useEffect(() => {
    inputRef.current.focus()
  },[])

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
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const onSumbitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .get(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${query}?collectible=1`,
        {
          headers: {
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key': APP_KEY,
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
  if (cards) {
    suggestions = <Result result={cards} />;
  } else if (error) {
    suggestions = <p>No Result...</p>;
  }

  let spinner = loading ? <Spinner /> : suggestions;

  return (
    <div className={classes.container}>
      <form onSubmit={onSumbitHandler}>
        <input
        ref={inputRef}
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
