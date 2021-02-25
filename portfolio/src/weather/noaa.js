import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment';

import Location from './Location';
import Temperature from './Temperature';
import Forecast from './Forecast';
import Freezing from './FreezingLevel';

import styles from '../css/noaa.module.css';

function NoaaApp(props) {
  // Current data
  const [data, setData] = useState([]);
  const [days, setDays] = useState([]);
  const [hour, setHours] = useState([]);
  const [date, setDates] = useState([]);
  const [dayFreezeData, setDayFreezeData] = useState([]);
  const [snowLevel, setSnowlevel] = useState([]);
  // console.log('Day freeze:', dayFreezeData)

  let moment = require('moment-timezone');

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

          // console.log(moment().format('dddd MMMM, h:mm:ss a'));

          let days = [];
          let hours = [];
          let dates = [];
          let freezeValues = [];

          let weekDay = ''; // sat
          let altitude = 0;
          responses[0].data.properties.snowLevel.values.map(value => {
            // console.log('Value', value)
            // console.log('Week Day', weekDay)
            
            // validTime format from NOAA
            let time = value.validTime;
            time = [...time];
            time = [...time].splice(0,25).join('');

            // Idividual Day
            let day = moment(time).tz("America/Los_Angeles").format("ddd");
            days.push(day);
            
            // Time of day
            let hour = moment(time).tz('America/Los_Angeles').format('LT');
            hours.push(hour);

            // Date
            let date = moment(time).tz('America/Los_Angeles').format('MMM Do')
            dates.push(date);

            // Level that freezing oocurs. 
            // Filter highest value for a given day
            // console.log(freezeValues)
            let freeze = value.value;
            // freezeValues.push({day: day, alt: freeze})
            if(day !== weekDay && freeze > altitude){
              freezeValues.push({day: day, alt: freeze});  
              weekDay = day; 
            } 
            
            let freezeV = new Set(freezeValues)

            setDayFreezeData({
              ...dayFreezeData,
              freezeValues
            })

            // Sets the data to state. 
            setDays(days);
            setHours(hours);
            setDates(dates);
            setSnowlevel(snowLevel)
          })

          const snowFallAmount = (responses[0].data.properties.snowfallAmount.values[3].value / 25.4).toFixed(0);
          const probability = (responses[0].data.properties.probabilityOfPrecipitation.values[3].value).toFixed(0);

          // One response index
          const forecast = responses[1].data.properties.periods[0].detailedForecast

          // two response index
          const currTemp = (responses[2].data.properties.temperature.value * 1.8 + 32).toFixed(0);
          const windSpeed = (responses[2].data.properties.windSpeed.value / 1.609).toFixed(0);
          const windGust = (responses[2].data.properties.windGust.value / 1.609).toFixed(0);
          const windChill = (responses[2].data.properties.windChill.value * 1.8 + 32).toFixed(0);

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
        key={Math.random()}
        days={days}
        hours={hour}
        dates={date}
        dayFreezeData={dayFreezeData}
        snowLevel={snowLevel}
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