import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import Search from './components/Search';
import Home from './views/Home';
import Results from './views/Results';
import NotFound from './views/NotFound';

function App() {
  const [data, setData] = useState({});

  const [display, setDisplay] = useState({});

  return (
    <div className="App">
      <Search display={display} setDisplay={setDisplay} />
      <Router>
        <Home path="/" />
        <Results path="/:category/:id" display={display} setDisplay={setDisplay} />
        <NotFound path="/notfound" display={display} setDisplay={setDisplay} />
      </Router>
    </div>
  );
}

export default App;
