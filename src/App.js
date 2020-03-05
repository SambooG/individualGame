import React from 'react';
import './App.css';
import Heading from './heading'
import Gamepage from './gamepage';
import Footer from './footer';
import Directions from '.directions'

function App() {
  return (
    <div className="App">
      <Heading />
      <Directions />
      <Gamepage/>
      <Footer />
    </div>
  );
}

export default App;
