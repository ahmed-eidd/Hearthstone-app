import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Classes from './containers/classes/Classes';
import Search from './containers/Search/Search';
import Layout from './components/layout/Layout';
import './App.css';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Classes} />
      <Route path="/search" component={Search} />
    </Switch>
  </Layout>
);

export default App;
