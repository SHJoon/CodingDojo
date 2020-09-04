import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <Forms inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
