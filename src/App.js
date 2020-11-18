import React from 'react'
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Home';
function App() {
  return (
    <>
    <Router >
      <GlobalStyle/>
      <Hero/>
      
      </Router>
 
    
    </>
  );
}

export default App;
