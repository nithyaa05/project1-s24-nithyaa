// src/App.js

import LinesPage from '/Users/nithyaab/Documents/GitHub/project1-s24-nithyaa/marta-interface/src/pages/LinePage.js';
import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <LinesPage />
      
    </div>
  );
}

export default App;
