import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import classes from './Classes.module.css';

class Classes extends Component {
  state = {
    cards: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({loading:true})
    const URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
    axios
      .get(URL, {
        headers: {
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a",
        },
      })
      .then((response) => {
    
        // const data = response.data.Classic.slice(150,180);
        const data = response.data.Classic.filter( card => card.artist);
        
        this.setState({ cards: data });
        console.log(response.data.Classic);
        this.setState({loading:false})
      })
      .catch((error) => {
        this.setState({ error: "Something went wrong" });
        console.log("error " + error);
        this.setState({loading:false})
      });
  }
  render() {
    let spinner = null
    if (this.state.loading) {
      spinner = (
       <div className={classes.loader}></div>
      )
    }
    let error = null;
    if (this.state.error) {
      error = <p style={{ fontSize: "40px" }}>{this.state.error}</p>;
    }
    return (
      <React.Fragment>
       
        <h1>Hearthstone App</h1>
        {spinner}
        {this.state.cards.map((card) => (
          <img  key={card.cardId} src={card.img} />
        ))}
        {error}
      </React.Fragment>
    );
  }
}

export default Classes;