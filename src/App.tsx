import React from 'react';
import './App.css';
import Apollo from './components/Apollo';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <Apollo>
      <TopicPage/>
    </Apollo>
  );
}

export default App;
