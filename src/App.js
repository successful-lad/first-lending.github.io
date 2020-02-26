import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "./consts/routes";
import { MainScreen } from  './screen'

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={routes.getMainScreen()}
          component={MainScreen}
        />
      </Switch>
    </Router>
  );
}

export default App;
