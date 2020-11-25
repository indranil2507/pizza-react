import React from 'react'
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Home';
import { productData } from './components/Products/data';
import Products from './components/Products';
function App() {
  return (
    <>
    <Router >
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your Favourite' data={productData}/>
      
      </Router>
 
    
    </>
  );
}

export default App;
