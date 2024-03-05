import React from 'react';
import Train from './Train';

const TrainList = ({ color, data, stationFilter, filterButtons }) => {
 // Data Filtering
 console.log('TrainList props:', { color, data, stationFilter, filterButtons });

 const filteredData = data.filter(train => {
    // Filter based on color
    if (train.line !== color) {
      return false;
    }

    // Filter based on station
    if (stationFilter && train.station !== stationFilter) {
      return false;
    }

    // Filter based on buttons state
    // Assuming the status and direction properties are directly accessible
    if (
      (filterButtons.arriving && train.status !== 'Arriving') ||
      (filterButtons.scheduled && train.status !== 'Scheduled') ||
      (filterButtons.northbound && train.direction !== 'Northbound') ||
      (filterButtons.southbound && train.direction !== 'Southbound') ||
      (filterButtons.eastbound && train.direction !== 'Eastbound') ||
      (filterButtons.westbound && train.direction !== 'Westbound')
    ) {
      return false;
    }

    return true;
 });

 // Mapping
 return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map(train => <Train key={train.id} train={train} />)
      ) : (
        <p>No trains match the selected criteria.</p>
      )}
    </div>
 );
};

export default TrainList;
