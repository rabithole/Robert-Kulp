import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment';

import Location from './Location';
import Temperature from './Temperature';
import Forecast from './Forecast';
import Freezing from './FreezingLevel';
import DataShape from './DataShape';

import styles from '../css/noaa.module.css';

function NoaaApp(props) {
  // Current data
  const [data, setData] = useState([]);
  const [days, setDays] = useState([]);
  const [hour, setHours] = useState([]);
  const [date, setDates] = useState([]);
  const [test, setTest] = useState([]);
  console.log(test);

  // Data that is passed to the Freezing Level component
  const [dayFreezeData, setDayFreezeData] = useState([]);
  console.log(dayFreezeData.freezeValues)

  const [snowLevel, setSnowlevel] = useState([]);

 

    let shapedData = [];
    let hiLow = [];
    let hi = 0;
    let low = 0;
    // let day = dayFreezeData.freezeValues[0].day;
    let day = '';
    let count = 0;

    function ParseHiLow() {
      if(dayFreezeData.freezeValues === undefined) {
        return
      } else {
        dayFreezeData.freezeValues.map(value => {
          if (day === '') {
            day = value.day;
          }

          if(value.day === day) {
            hiLow.push(value.alt);  

            console.log('DAY', value.day, 'HiLow Array', hiLow)
          } else if (value.day !== day) {
            console.log("------------HiLow Array", hiLow)
            console.log('HIGH', Math.max(...hiLow), 'LOW', Math.min(...hiLow))
            hiLow = [];
            hiLow.push(value.alt)

            hi = 0;
            low = 0;
            day = value.day;
          }
        })
        
        // return [hi = Math.max(...hiLow), low = Math.min(...hiLow)]; 
      } 
    }
    ParseHiLow();

    // console.log("hi low", hi, low);

    // let chartObjects = [];

    // (function CreateObject() {
    //   if(dayFreezeData.freezeValues === undefined){
    //     return 
    //   } else {
    //     dayFreezeData.freezeValues.map(value => {
    //         if(value.alt === hi){
              
    //           chartObjects.push({hi: hi, index: dayFreezeData.freezeValues.indexOf(value)})
              
    //         }
    //         if(value.alt === low){
    //           chartObjects.push({low: low, index: dayFreezeData.freezeValues.indexOf(value)})
    //         }
    //       })
    //       console.log(chartObjects)
    //     }
    // }())
  
	return (
		<div id={styles.noaa}>
      <Temperature 
        maxTemp={data.maxTemp}
        minTemp={data.minTemp}
        currTemp={data.currTemp}
      />
      
      <Freezing 
        key={Math.random()}
        // days={days}
        // hours={hour}
        // dates={date}
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

    {/* Data from freezing level graph module. This shapes the objects for the graph to display. */}
      <DataShape
        setData={setData}
        setDays={setDays}
        setHours={setHours}
        setDates={setDates}
        setDayFreezeData={setDayFreezeData}
        setSnowlevel={setSnowlevel}
      />
		</div>
	);
}

export default NoaaApp;


 // let moment = require('moment-timezone');

  // useEffect(() => {
  //   async function data() {
  //     let gridPoints = 'https://api.weather.gov/gridpoints/PQR/142,88'; // 0 index
  //     let forecast = 'https://api.weather.gov/gridpoints/PQR/142,88/forecast'; // 1 index
  //     let latest = 'https://api.weather.gov/stations/mhm66/observations/latest'; // 2 index
  //     let station = 'https://api.weather.gov/stations/mhm66'; // 3 index

  //     const gridPointsRequest = axios.get(gridPoints); // 0
  //     const forecastRequest = axios.get(forecast); // 1
  //     const latestRequest = axios.get(latest); // 2
  //     const stationRequest = axios.get(station); // 3

  //     // each endpoint is stored in an array and parsed with responses below. 
  //     // 0 is the grid points index
  //     // 1 is the forecast
  //     // 2 is the latest aka current info
  //     // 3 is the location name
  //     await axios.all([gridPointsRequest, forecastRequest, latestRequest, stationRequest])
  //       .then(axios.spread((...responses) => {
  //         // zero response index
  //         const elevation = (responses[0].data.properties.elevation.value / 0.3048).toFixed();
  //         const maxTemp = (responses[0].data.properties.maxTemperature.values[0].value * 1.8 + 32).toFixed();
  //         const minTemp = (responses[0].data.properties.minTemperature.values[0].value * 1.8 + 32).toFixed();
  //         // Single value. Should be closest to the current time. Not the case at the moment. 
  //         const snowLevel = (responses[0].data.properties.snowLevel.values[0].value / 0.3048).toFixed(0);
  //         // console.log(moment().format('dddd MMMM, h:mm:ss a'));

  //         let days = [];
  //         let hours = [];
  //         let dates = [];
  //         let freezeValues = [];

  //         let weekDay = ''; // sat

  //         responses[0].data.properties.snowLevel.values.map(value => {

  //           // validTime format from NOAA
  //           let time = value.validTime;
  //           time = [...time];
  //           time = [...time].splice(0,25).join('');

  //           // Idividual Day
  //           let day = moment(time).tz("America/Los_Angeles").format("ddd");
  //           days.push(day);
            
  //           // Time of day
  //           let hour = moment(time).tz('America/Los_Angeles').format('LT');
  //           hours.push(hour);

  //           // Date
  //           let date = moment(time).tz('America/Los_Angeles').format('MMM Do')
  //           dates.push(date);

  //           // Level that freezing oocurs. 
  //           let freeze = parseInt((value.value / 0.3048).toFixed(0));
  //           // console.log('Day-----', day, '---Hour------', hour, '---Freeze Level-----', freeze)

  //           (function freezeLevels() {
  //           if(day !== weekDay){
  //               freezeValues.push({
  //                 day: day, 
  //                 alt: freeze,
  //                 hour: hour
  //               });  
  //               weekDay = day; 
  //             } else {
  //               freezeValues.push({
  //                 day: '',
  //                 alt: freeze,
  //                 hour: hour
  //               })
  //             }
  //           }());
  //           // freezeLevels();

  //           // console.log(freezeValues);

  //           function freezeLevelGraphData() {
  //             console.log('Freeze Level Data Shaped')
  //           };

  //           // freezeLevelGraphData();

  //           setDayFreezeData({
  //             ...dayFreezeData,
  //             freezeValues
  //           })

  //           // Sets the data to state. 
  //           setDays(days);
  //           setHours(hours);
  //           setDates(dates);
  //           setSnowlevel(snowLevel)
  //         })

  //         // Specific location data.
  //         const snowFallAmount = (responses[0].data.properties.snowfallAmount.values[3].value / 25.4).toFixed(0);
  //         const probability = (responses[0].data.properties.probabilityOfPrecipitation.values[3].value).toFixed(0);

  //         // One response index
  //         const forecast = responses[1].data.properties.periods[0].detailedForecast

  //         // two response index
  //         const currTemp = (responses[2].data.properties.temperature.value * 1.8 + 32).toFixed(0);
  //         const windSpeed = (responses[2].data.properties.windSpeed.value / 1.609).toFixed(0);
  //         const windGust = (responses[2].data.properties.windGust.value / 1.609).toFixed(0);
  //         const windChill = (responses[2].data.properties.windChill.value * 1.8 + 32).toFixed(0);

  //         // three response index
  //         const locationName = responses[3].data.properties.name;

  //         setData({
  //           ...data,
  //           elevation, maxTemp, minTemp, snowLevel, currTemp, locationName, forecast, windSpeed, windGust, windChill, snowFallAmount, probability
  //         })
  //      test, setTest  = useState([]);}))
  //       .catch(err => {
  //         console.log(err);
  //     })

  //   }

  //     data();
  // },[])