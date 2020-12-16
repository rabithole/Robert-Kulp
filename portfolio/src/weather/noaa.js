import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoaaCard from './noaa_card';

function NoaaApp(props) {
  const [elevation, setElevation] = useState();
  const [temp, setTemp] = useState();
  console.log(elevation)

  useEffect(() => {
    axios
      .get('https://api.weather.gov/gridpoints/PQR/142,88')
      .then(response => {
        const elevation = response.data.properties.elevation.value / 0.3048;
        console.log('temp', response.data.properties.temperature.values[0].value)
        const temp = response.data.properties.temperature.values[0].value * 1.8 + 32;

        setElevation(elevation)
        setTemp(temp)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);
  
	return (
		<div>
      <NoaaCard
        elevation={elevation}
        temp={temp}
      />
		</div>
	);
}

export default NoaaApp;