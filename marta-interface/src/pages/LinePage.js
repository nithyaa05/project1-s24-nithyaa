import React, { useState, useEffect } from 'react';
import NavBar from "/Users/nithyaab/Documents/GitHub/project1-s24-nithyaa/marta-interface/src/components/NavBar.js";
import TrainList from "/Users/nithyaab/Documents/GitHub/project1-s24-nithyaa/marta-interface/src/components/TrainList.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

 function LinesPage() {
  const { color } = useParams(); 
  const [currColor, setCurrColor] = useState(color);
  const [stationData, setStationData] = useState([]);
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //const [stationFilter, setStationFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
      try {
        const stationResponse = await fetch(`https://midsem-bootcamp-api.onrender.com/stations/${currColor}`);
        const stationData = await stationResponse.json();
        setStationData(stationData);
  
        const arrivalsResponse = await fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`);
        const trainData = await arrivalsResponse.json();
        setTrainData(trainData);
  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData(); // Call the async function
  
  }, [currColor]);

  const colorChange = (color) =>{
    setCurrColor(color);
  }
  

  return (
    <div>
      <div >
            <button class="button" style={{backgroundColor: 'gold'}} onClick={() => setCurrColor('gold')}>Gold</button>
            <button class="button" style={{backgroundColor: 'red'}} onClick={() => setCurrColor('red')}>Red</button>
            <button class="button" style={{backgroundColor: 'blue'}} onClick={() => setCurrColor('blue')}>Blue</button>
            <button class="button" style={{backgroundColor: 'green'}} onClick={() => setCurrColor('green')}>Green</button>
        </div>
        <NavBar color={currColor} data={stationData} />
    </div>
  );
}

export default LinesPage;


//<NavBar color={currColor} data={stationData} />
//<TrainList color={currColor} data={trainData} loading={loading} />