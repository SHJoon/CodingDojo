import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import ProductForm from './views/ProductForm';
import SingleProduct from './views/SingleProduct';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/" />
        <SingleProduct path="/:id" />
        <EditProduct path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
