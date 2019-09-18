import React from 'react';
import FormContainer from '../containers/Forms/FormContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FormContainer} />;
      </Switch>
    </Router>
  )
}