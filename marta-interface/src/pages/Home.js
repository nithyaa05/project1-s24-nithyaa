import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/lines/gold">Gold Line</Link>
        <Link to="/lines/green">Green Line</Link>
        <Link to="/lines/blue">Blue Line</Link>
        {/* Add more links for other lines as needed */}
        <Link to="/about">About</Link>
      </nav>
      <h1>MARTA Home</h1>
      {/* Add any additional content or styling as needed */}
    </div>
  );
};

export default Home;
