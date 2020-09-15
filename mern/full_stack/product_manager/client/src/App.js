import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import ProductForm from './views/ProductForm';
import SingleProduct from './views/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/" />
        <SingleProduct path="/:productId" />
      </Router>
    </div>
  );
}

export default App;
