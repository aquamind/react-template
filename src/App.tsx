import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <div />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
