import React from 'react';
import './App.css';
import Apollo from './components/Apollo';
import Router from './components/Router';

function App() {
  return (
    <Apollo>
      <Router/>
    </Apollo>
  );
}

export default App;
