import React, { useEffect, useState } from 'react';
import styles from '../css/noaa.module.css';
import axios from 'axios';

function DataShape(props) {
  // console.log(props)

  // const [data, props.setData] = useState([]);
  // const [days, props.setDays] = useState([]);
  // const [hour, props.setHours] = useState([]);
  // const [date, props.setDates] = useState([]);props.

  // const [props.dayFreezeData, setDayFreezeData] = useState([]);
  // console.log('Day Freeze Data', props.dayFreezeData)

  // const [snowLevel, setSnowlevel] = useState([]);

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
          // Single value. Should be closest to the current time. Not the case at the moment. 
          const snowLevel = (responses[0].data.properties.snowLevel.values[0].value / 0.3048).toFixed(0);
          // console.log(moment().format('dddd MMMM, h:mm:ss a'));

          let days = [];
          let hours = [];
          let dates = [];
          let freezeValues = [];

          let weekDay = ''; // sat

          responses[0].data.properties.snowLevel.values.map(value => {

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
            let freeze = parseInt((value.value / 0.3048).toFixed(0));
            // console.log('Day-----', day, '---Hour------', hour, '---Freeze Level-----', freeze)

            function freezeLevels() {
            if(day !== weekDay){
                freezeValues.push({
                  day: day, 
                  alt: freeze,
                  hour: hour
                });  
                weekDay = day; 
              } else {
                freezeValues.push({
                  day: '',
                  alt: freeze,
                  hour: hour
                })
              }
            }
            freezeLevels();

            // console.log(freezeValues)

            props.setDayFreezeData({
              ...props.dayFreezeData,
              freezeValues
            })

            // Sets the data to state. 
            props.setDays(days);
            props.setHours(hours);
            props.setDates(dates);
            props.setSnowlevel(snowLevel)
          })

          // Specific location data.
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

          props.setData({
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
		<div className={styles.dataShape}>
      <h1>Data Shaping</h1>
      <section>
        <h2>Section</h2>
      </section>      

		</div>
	);
}

export default DataShape;