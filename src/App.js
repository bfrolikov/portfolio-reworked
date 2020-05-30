import React from 'react';
import SiteEN from './SiteEN';
import SiteRU from './SiteRU';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/en">
            <SiteEN />
          </Route>
          <Route path="/">
            <SiteRU />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
