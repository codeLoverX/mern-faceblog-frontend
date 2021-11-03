import React from 'react';
import { Container,  } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import F404 from './pages/404/404';
import Home from './pages/Home';

const App = () => {
 

  return (

      <Switch>
        <Route path="/" exact  component={Home} />
        <Route component={F404} />
      </Switch>
  );
};

export default App;
