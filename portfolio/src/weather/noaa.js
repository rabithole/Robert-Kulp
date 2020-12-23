import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoaaCard from './noaa_card';
import Temperature from './temperature';

function NoaaApp(props) {
  const [elevation, setElevation] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [currTemp, setCurrTemp] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();
  const [snowLevel, setSnowLevel] = useState();

  // const []
  const [data, setData] = useState([]);
  console.log('Data', data)

  if(elevation && maxTemp) {
    // console.log('elevation', elevation)
    // console.log('maxTemp', maxTemp)
  }

  useEffect(() => {
    let gridPoints = 'https://api.weather.gov/gridpoints/PQR/142,88';
    let foreast = 'https://api.weather.gov/gridpoints/PQR/142,88/forecast';
  })
   

  useEffect(() => {
    axios
      // Top of Blue chair and Mt Hood Express
      // Has the most data, but not necessarily the most usefull for my goal.
      .get('https://api.weather.gov/gridpoints/PQR/142,88')
      .then(response => {
        const elevation = response.data.properties.elevation.value / 0.3048;
        const maxTemp = response.data.properties.maxTemperature.values[1].value * 1.8 + 32;
        const minTemp = response.data.properties.minTemperature.values[1].value * 1.8 + 32;
        const snowLevel = (response.data.properties.snowLevel.values[15].value / 0.3048).toFixed(0);

        console.log('All data', response.data.properties.snowLevel)

        setData({
          ...data,
          elevation, maxTemp, minTemp, snowLevel
        })

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
          // name = text description of when. 
          // temperature in F
          // wind speed ex: '46-52 mph'
          // wind direction
          // short forecast
          // detailed forecast
          // elevation
          // multi day forecast
          setData({
            ...data, forecast
          })
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
          // Wind speed
          // wind gust
          // temperature
          // elevation
          // text description ex: 'windy'
          // timestamp = current time ex: '2020-12-21T22:00:00+00:00'
          // barometric pressure (seems to be null more often than not)
          // sea level pressure (null as well)

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
          setData({
            ...data, locationName
          })
        })
        .catch(err => {
          console.log(err)
        })
  }, []);
  
	return (
		<div>
      <Temperature 
        maxTemp={maxTemp}
        minTemp={minTemp}
        currTemp={currTemp}
      />

      <NoaaCard
        elevation={elevation}
        location={location}
        forecast={forecast}
        snowLevel={snowLevel}

        maxTemp={maxTemp}
        minTemp={minTemp}
        currTemp={currTemp}
      />
		</div>
	);
}

export default NoaaApp;