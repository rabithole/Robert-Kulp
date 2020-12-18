import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoaaCard from './noaa_card';

function NoaaApp(props) {
  const [elevation, setElevation] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [currTemp, setCurrTemp] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();
  const [snowLevel, setSnowLevel] = useState();

  if(elevation && maxTemp) {
    // console.log('elevation', elevation)
    // console.log('maxTemp', maxTemp)
  }
   

  useEffect(() => {
    axios
      // Top of Blue chair and Mt Hood Express
      .get('https://api.weather.gov/gridpoints/PQR/142,88')
      .then(response => {
        const elevation = response.data.properties.elevation.value / 0.3048;
        const maxTemp = response.data.properties.maxTemperature.values[0].value * 1.8 + 32;
        const minTemp = response.data.properties.minTemperature.values[0].value * 1.8 + 32;
        const snowLevel = (response.data.properties.snowLevel.values[0].value / 0.3048).toFixed(0);

        // console.log('Snow Level', (response.data.properties.snowLevel.values[0].value / 0.3048).toFixed(0))

        setElevation(elevation)
        setMaxTemp(maxTemp)
        setMinTemp(minTemp)
        setSnowLevel(snowLevel)
      })
      .catch(err => {
        console.log(err)
      });

      axios
        .get('https://api.weather.gov/gridpoints/PQR/142,88/forecast')
        .then(response => {
          // console.log('Forecast full ------------', response)
          // console.log('Detailed Forecast ------------', response.data.properties.periods[0].detailedForecast)
          const forecast = response.data.properties.periods[0].detailedForecast
          setForecast(forecast)
        })
        .catch(err => {
          console.log(err)
        })

      axios
        .get('https://api.weather.gov/stations/mhm66/observations/latest')
        .then(response => {
          // console.log('Latest -----------', response.data.properties)
          const currTemp = (response.data.properties.temperature.value * 1.8 + 32).toFixed(0);
          setCurrTemp(currTemp)
        })
        .catch(err => {
          console.log(err)
        })

      axios
        .get('https://api.weather.gov/stations/mhm66')
        .then(response => {
          // console.log('Station Name --------------', response.data.properties.name)
          const locationName = response.data.properties.name;
          setLocation(locationName)
        })
        .catch(err => {
          console.log(err)
        })
  }, []);
  
	return (
		<div>
      <NoaaCard
        elevation={elevation}
        maxTemp={maxTemp}
        minTemp={minTemp}
        currTemp={currTemp}
        location={location}
        forecast={forecast}
        snowLevel={snowLevel}
      />
		</div>
	);
}

export default NoaaApp;