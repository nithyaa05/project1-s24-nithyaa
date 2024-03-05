import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LinesPage from './pages/LinePage.js';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route index Component={Home} />
        <Route path="/lines/:color" Component={LinesPage} />
        <Route path="/about" Component={About} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
