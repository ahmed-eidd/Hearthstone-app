import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Classes.module.css";

const Classes = () => {
  // state = {
  //   cards: [],
  //   error: null,
  //   loading: false,
  // };
  const [cards,setCards] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    const URL =
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Shaman?collectible=1";
    axios
      .get(URL, {
        headers: {
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a",
        },
      })
      .then((response) => {
        const data = response.data.filter((card) => card.type !== 'Hero').slice(0, 20);
        // const data = response.data.Classic.filter( card => card.artist);
        // const data = response.data
        setCards(data)
        console.log(response.data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Something Went Wrong! Sorry.')
        console.log("error " + error);
        setLoading(false)
      });

  },[]) 
 
    let spinner = null;
    if (loading) {
      spinner = <div className={classes.loader}></div>;
    }
    let errorMsg = null;
    if (error) {
      errorMsg = <p style={{ fontSize: "40px", color:"#ffffff" }}>{error}</p>;
    }
    return (
      <div className={classes.classesContainer}>
        <h1>Hearthstone App</h1>
        {spinner}
        <div className={classes.imgContainer}>
          {cards.map((card) => (
            <img key={card.cardId} src={card.img} />
          ))}
        </div>
        {errorMsg}
      </div>
    );
  }


export default Classes;
