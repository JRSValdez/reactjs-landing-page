import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactThankYou from './components/home/contact/ContactThankYou';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import {MenuPage as Menu} from './pages/menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/menu" exact render={props => <Menu {...props} />} />
        <Route path="/ContactThankYou" exact render={props => <ContactThankYou {...props} />} />
        <Route component={NotFound} />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
