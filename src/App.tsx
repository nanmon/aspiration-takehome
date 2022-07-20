import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Apollo from './components/Apollo';
import Router from './components/Routes';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Apollo>
        <Search/>
        <Router/>
      </Apollo>
    </BrowserRouter>
  );
}

export default App;
