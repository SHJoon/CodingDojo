import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Redirect, Router } from '@reach/router';

import Home from './views/Home';
import Word from './views/Word';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Word path="/:word" />
        <Word path="/:word/:color/:back" />
        <Redirect from="/" to="/home" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
