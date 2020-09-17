import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Router, Redirect } from '@reach/router';

import PlayerStatus from './views/PlayerStatus';
import PlayerList from './views/PlayerList';
import NewPlayer from './views/NewPlayer';

function App() {
  return (
    <div className="App">
      <Link to="/players/list">Manage Players  |</Link>
      <Link to="/status/game/1">|  Manage Player Status</Link>
      <Router>
        <PlayerStatus path="/status/game/:gameId" />
        <PlayerList path="/players/list" />
        <NewPlayer path="/players/addplayer" />
      </Router>
      <Redirect from="/" to="/players/list" noThrow="true" />
    </div>
  );
}

export default App;
