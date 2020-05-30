import React, { useEffect, useState, Component } from "react";

import axios from "axios";
import classes from "./App.module.css";

class App extends Component {
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
        // data.push(response.data.basic)
        const data = response.data.Classic.slice(0,10);
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
        <h1>Hello Omar noob</h1>
        {spinner}
        {this.state.cards.map((card) => (
          <img className={classes.cards} key={card.cardId} src={card.img} />
        ))}
        {error}
      </React.Fragment>
    );
  }
}

export default App;
// function App() {
//   const [cards, setCards] = useState([])
//   useEffect(() => {
//     const URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
//     const data = [];
//     axios.get(URL, { headers: {
//       "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
//       "x-rapidapi-key": "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a"
//     } })
//      .then(response => {
//       // data.push(response.data.basic)
//       setCards(response.data.basic)
//       console.log(cards)
//       console.log(response.data);
//       })
//      .catch((error) => {
//          console.log('error ' + error);
//       });
//   }, [])

//   return (
//     <div className="App">
//       {/* {cards.map(card => <p>{card.name}</p>)} */}
//     </div>
//   );
// }

// export default App;
