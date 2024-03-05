import React, { useState, useEffect } from 'react';
import Train from "/Users/nithyaab/Documents/GitHub/project1-s24-nithyaa/marta-interface/src/components/Train.js"

export default function TrainList(props) {
    const { color, data, arrivingTrains, scheduledTrains, isNorthbound, isSouthbound, isEastbound, isWestbound, stationSelected } = props;
    
    const[listLoading, setListLoading] = useState(true)

    const filterData = data.filter((train) => {
      const arriving = train.WAITING_TIME.equals("Arriving");
    
      let arrivalFilter;
      if (arrivingTrains) {
        arrivalFilter = arriving;
      } else if (scheduledTrains) {
        arrivalFilter = !arriving;
      } else {
        arrivalFilter = true;
      }
    
      let directionFilter;
      if (isNorthbound) {
        directionFilter = train.DIRECTION === "N";
      } else if (isSouthbound) {
        directionFilter = train.DIRECTION === "S";
      } else if (isEastbound) {
        directionFilter = train.DIRECTION === "E";
      } else if (isWestbound) {
        directionFilter = train.DIRECTION === "W";
      }
    
      let stationFilter = stationSelected.equals('All Stations') || train.STATION.equals(stationSelected);
    
      return train.LINE.equals(color.toUpperCase()) && arrivalFilter && directionFilter && stationFilter;
    });
    



    return (
      <div className="list-container">
      {filterData.length > 0 ? (
        filterData.map((train, index) => (
          <Train key={index} {...train} />
        ))
      ) : (
        <p>No trains available for the {color} line.</p>
      )}
      </div>
    );
    
}