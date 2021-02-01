import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import Location from './Location';
import Temperature from './Temperature';
import Forecast from './Forecast';
import Freezing from './FreezingLevel';

import styles from '../css/noaa.module.css';

function NoaaApp(props) {
  const [data, setData] = useState([]);
  // console.log('Data', data)

  useEffect(() => {

    async function data() {
      let gridPoints = 'https://api.weather.gov/gridpoints/PQR/142,88'; // 0 index
      let forecast = 'https://api.weather.gov/gridpoints/PQR/142,88/forecast'; // 1 index
      let latest = 'https://api.weather.gov/stations/mhm66/observations/latest'; // 2 index
      let station = 'https://api.weather.gov/stations/mhm66'; // 3 index

      const gridPointsRequest = axios.get(gridPoints); // 0
      const forecastRequest = axios.get(forecast); // 1
      const latestRequest = axios.get(latest); // 2
      const stationRequest = axios.get(station); // 3

      // each endpoint is stored in an array and parsed with responses below. 
      // 0 is the grid points index
      // 1 is the forecast
      // 2 is the latest aka current info
      // 3 is the location name
      await axios.all([gridPointsRequest, forecastRequest, latestRequest, stationRequest])
        .then(axios.spread((...responses) => {
          // zero response index
          const elevation = (responses[0].data.properties.elevation.value / 0.3048).toFixed();
          const maxTemp = (responses[0].data.properties.maxTemperature.values[0].value * 1.8 + 32).toFixed();
          const minTemp = (responses[0].data.properties.minTemperature.values[0].value * 1.8 + 32).toFixed();
          const snowLevel = (responses[0].data.properties.snowLevel.values[0].value / 0.3048).toFixed(0);


          responses[0].data.properties.snowLevel.values.map(value => {
            console.log('Value', value)
            let time = value.validTime
            time = [...time]
            // console.log('Raw Time', time)
            time = [...time].splice(0,25).join('')
            // console.log(time)
            console.log('Moment Time: ------------', moment(time).format("dddd, ll, LTS"), '   ', 'Temp: ', value.value, '     ', 'Time: ', time, 'TimeZone: ')
          })

          console.log(responses[0].data.properties.snowLevel.values)

          const snowFallAmount = (responses[0].data.properties.snowfallAmount.values[3].value / 25.4).toFixed(0);
          const probability = (responses[0].data.properties.probabilityOfPrecipitation.values[3].value).toFixed(0);
          // console.log('Snow Level', responses[0].data.properties.snowLevel.values)

          // One response index
          const forecast = responses[1].data.properties.periods[0].detailedForecast

          // two response index
          const currTemp = (responses[2].data.properties.temperature.value * 1.8 + 32).toFixed(0);
          const windSpeed = (responses[2].data.properties.windSpeed.value / 1.609).toFixed(0);
          const windGust = (responses[2].data.properties.windGust.value / 1.609).toFixed(0);
          const windChill = (responses[2].data.properties.windChill.value * 1.8 + 32).toFixed(0);
          // console.log('Precipitation', probability)

          // three response index
          const locationName = responses[3].data.properties.name;

          setData({
            ...data,
            elevation, maxTemp, minTemp, snowLevel, currTemp, locationName, forecast, windSpeed, windGust, windChill, snowFallAmount, probability
          })

        }))
        .catch(err => {
          console.log(err);
      })

    }

      data();
  },[])
   

  
  
	return (
		<div id={styles.noaa}>
      <Temperature 
        maxTemp={data.maxTemp}
        minTemp={data.minTemp}
        currTemp={data.currTemp}
      />

      <Freezing 
        snowLevel={data.snowLevel}
      />

      <div className={styles.sideBySide}>
        <Forecast
          forecast={data.forecast}
        />

        <Location
          location={data.locationName}
          elevation={data.elevation}
          windSpeed={data.windSpeed}
          windGust={data.windGust}
          windChill={data.windChill}
          snowFallAmount={data.snowFallAmount}
          probability={data.probability}
        />
      </div>
		</div>
	);
}

export default NoaaApp;