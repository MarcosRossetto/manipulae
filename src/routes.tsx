import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Favorite from './pages/Favorite';

function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorite} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
