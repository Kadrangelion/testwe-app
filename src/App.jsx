import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Book } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/book/:id" exact><Book /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
