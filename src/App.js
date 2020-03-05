import React from 'react';
import './App.css';
import Heading from './heading'
import Gamepage from './gamepage';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <Gamepage/>
      <Footer />
    </div>
  );
}

export default App;
