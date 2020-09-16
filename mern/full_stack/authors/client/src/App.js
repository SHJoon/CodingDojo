import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';

import Homepage from './views/Homepage';
import New from "./views/New";
import Edit from "./views/Edit";

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Homepage path="/" />
        <New path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
