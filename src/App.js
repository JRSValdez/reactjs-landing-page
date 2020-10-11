import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Redirect to="/" />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
