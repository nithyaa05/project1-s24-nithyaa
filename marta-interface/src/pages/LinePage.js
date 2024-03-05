import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';

const LinesPage = () => {
  // State variables
  const [currColor, setCurrColor] = useState('gold');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [stationFilter, setStationFilter] = useState(null);
  const [filterButtons, setFilterButtons] = useState({
    arriving: false,
    scheduled: false,
    northbound: true,
    southbound: true,
    eastbound: true,
    westbound: true,
  });

  // API Fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error and update state accordingly
      }
    };

    fetchData();
  }, [currColor]);

  // Rendering
  return (
    <div>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Render Navbar or include buttons here */}
          <TrainList
            color={currColor}
            data={data}
            stationFilter={stationFilter}
            filterButtons={filterButtons}
          />
        </>
      )}
    </div>
  );
};

export default LinesPage;