import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Character } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/char/:id" exact><Character /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
