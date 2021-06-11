import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';

import Home from './Components/home'
import Wallets from './Components/wallets'

function App() {

  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/wallets" component={Wallets} />  
    </Switch>
  );
}

export default App;
