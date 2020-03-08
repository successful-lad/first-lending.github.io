import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "./consts/routes";
import { MainScreen, TestimonialsScreen } from  './screen'

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={routes.getTestimonialsScreen()}
          component={TestimonialsScreen}
        />
        <Route
          path={routes.getMainScreen()}
          component={MainScreen}
        />
      </Switch>
    </Router>
  );
}

export default App;
