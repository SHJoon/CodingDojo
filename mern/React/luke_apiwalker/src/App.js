import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import Search from './components/Search';
import Home from './views/Home';
import Results from './views/Results';
import NotFound from './views/NotFound';

function App() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState({});
  const [homeworld, setHomeworld] = useState({});

  return (
    <div className="App">
      <Search display={display} setDisplay={setDisplay} homeworld={homeworld} setHomeworld={setHomeworld} name={name} setName={setName} />
      <Router>
        <Home path="/" />
        <Results path="/:category/:id" display={display} homeworld = {homeworld} name={name}/>
        <NotFound />
      </Router>
    </div>
  );
}

export default App;
