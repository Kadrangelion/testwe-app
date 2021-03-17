import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, CharList, House, Char } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/char/:id" exact><Char /></Route>
        <Route path="/house/:id" exact><House /></Route>
        <Route path="/charList/:id" exact><CharList /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
