import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About MARTA</h1>
      {/* Display MARTA map and basic information */}
      {/* Add a button to navigate back to the home page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
