import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from './pages/Index';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Route path="/menu" exact render={props => <MenuPage {...props} />} />
        <Redirect to="/" />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
