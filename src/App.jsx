import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, CharList } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/charList/:id" exact><CharList /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
