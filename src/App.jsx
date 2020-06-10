import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Classes from './containers/classes/Classes';
import Search from './containers/Search/Search';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Classes} />
        <Route path="/search" component={Search} />
      </Switch>
    </Layout>
  );
};

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
