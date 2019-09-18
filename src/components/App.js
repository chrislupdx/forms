import React from 'react';
import Home from '../containers/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />;
      </Switch>
    </Router>
  )
}