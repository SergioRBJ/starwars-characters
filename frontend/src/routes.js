import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters/films/:film" exact component={Characters} />
    </Switch>
  );
}
