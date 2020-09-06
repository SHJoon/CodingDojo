import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [boxes, setState] = useState([]);
  return (
    <div className="App">
      <Form inputs={boxes} setInputs={setState}/>
      {boxes.map((box, i) =>{
        return(
        <div key={i}>
        <Box inputs={box}/>
        </div>
        );
      })}
    </div>
  );
}

export default App;
