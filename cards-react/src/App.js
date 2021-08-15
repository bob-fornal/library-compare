
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '@shared/header/Header.js';

import Cards from '@pages/cards/Cards.js';
import Deck from '@pages/deck/Deck.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content--wrapper">
        <Switch>
          <Route exact path='/' render={ () => (<Redirect to="/cards" />) } />
          <Route path='/cards' component={ Cards } />
          <Route path='/deck' component={ Deck } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
