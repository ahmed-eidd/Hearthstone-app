import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import classes from "./Classes.module.css";

class Classes extends Component {
  state = {
    cards: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
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
        this.setState({ cards: data });
        console.log(response.data);
        console.log(data);
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ error: "Something went wrong" });
        console.log("error " + error);
        this.setState({ loading: false });
      });

    // axios.get(`https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${this.state.cards[0].cardId}.png`).then(res=> console.log(res.data)).catch(err => console.log(err.message))
  }
  render() {
    let spinner = null;
    if (this.state.loading) {
      spinner = <div className={classes.loader}></div>;
    }
    let error = null;
    if (this.state.error) {
      error = <p style={{ fontSize: "40px", color:"#ffffff" }}>{this.state.error}</p>;
    }
    return (
      <div className={classes.classesContainer}>
        <h1>Hearthstone App</h1>
        {spinner}
        <div className={classes.imgContainer}>
          {this.state.cards.map((card) => (
            <img key={card.cardId} src={card.img} />
          ))}
        </div>
        {error}
      </div>
    );
  }
}

export default Classes;
