import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import {MenuPage as Menu} from './pages/menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/menu" exact render={props => <Menu {...props} />} />
        <Redirect to="/" />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
