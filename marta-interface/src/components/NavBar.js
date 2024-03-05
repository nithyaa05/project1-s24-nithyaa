import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/lines/gold">Gold Line</Link>
      <Link to="/lines/green">Green Line</Link>
      <Link to="/lines/blue">Blue Line</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;