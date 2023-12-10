import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import Services from './components/Services';
import './index.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Home />
        <Services />
      </React.Fragment>
    </div>
  );
}

export default App;
