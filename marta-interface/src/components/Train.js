import React from 'react';

const Train = ({ train }) => {
  // Extract relevant information from the train props
  const { station, time, direction, status } = train;

  // Apply conditional styling based on the train status
  const getStatusStyle = () => {
    switch (status) {
      case 'On Time':
        return { color: 'green' };
      case 'Delayed':
        return { color: 'red' };
      default:
        return {};
    }
  };

  // Rendering
  return (
    <div style={getStatusStyle()}>
      <p>Station: {station}</p>
      <p>Time: {time}</p>
      <p>Direction: {direction}</p>
      <p>Status: {status}</p>
      {/* Add any additional content or styling as needed */}
    </div>
  );
};

export default Train;
