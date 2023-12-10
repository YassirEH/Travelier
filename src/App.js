import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    </div>
  );
}

export default App;
