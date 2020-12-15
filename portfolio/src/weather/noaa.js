import React, { useContext, useEffect } from 'react';
import axios from 'axios';
// import { TripsContext } from '../contexts/TripsContext';
// import SingleTripsCard from '../components/SingleTripsCard';

function NoaaApp(props) {

  useEffect(() => {
    axios
      .get('https://api.weather.gov/gridpoints/PQR/146,97')
      .then(response => {
        console.log('noaa', response.data)
      })
      .catch(err => {
        console.log(err)
      });

      axios
        .get('https://api.weather.gov/gridpoints/PQR/146,97/forecast')
        .then(response => {
          console.log('noaa forecast', response.data.properties)
        })
        .catch(err => {
          console.log(err)
        });

      axios
        .get('https://api.weather.gov/gridpoints/PQR/139,105')
        .then(response => {
          console.log('Cascade Locks', response.data.properties)
        })
        .catch(err => {
          console.log(err)
        });
  }, []);
  
	return (
		<div>
      <h1>NOAA Beginning</h1>
		</div>
	);
}

export default NoaaApp;


////////  Location information with forecast. Leave off forecast to get more info
// https://api.weather.gov/gridpoints/{loc or office}/{lat or grid x},{lon or grid y}/forecast 
// loc, lat and lon data is NOAA api specific translated from a geospacial resource that I need to get first. 

// This will give office and grid. Notice /points vs gridpoints
// Use https://api.weather.gov/points/{lat},{lon} 

// LIST OF END POINTS WITH DATA TO GRAB
// https://api.weather.gov/gridpoints/PQR (gridid)/146 (grid x),97 (grid y)/forecast
///// .periods accesses an array containing keys below. 
////// .detailedForecast
////// .name (this afternoon, tonight, etc..)
////// .shortForecast (ex: chance of showers)
////// .temperature (integer)
////// .temperatureUnit: "F"
////// .windDirection: (ex: "SW")
////// .windSpeed: "1 to 8 mph"


// https://api.weather.gov/gridpoints/PQR/146,97/
//// .properties
///// .elecation
///// .gridId
///// .gridX
///// .gridY
// Wind gusts data available at multiple speeds. 
///// .potentialOf20mphWinds
///// .potentialOf20mphWindsGusts
/////// validTime is used for the below items. 
///// .snowLevel
///// .snowfallAmount
///// .iceAccumulation
///// .maxTemperature
///// .minTemperature
///// .


// https://api.weather.gov/gridpoints/PQR (gridid)/146 (grid x),97 (grid y)/stations
///// .stationIdentifier
///// .name
///// .forcast
///// .elevation
///// .



// API DEFINITIONS

// cielingHeight: height of clouds above the ground. This is for clouds that cover more than half the sky
// davis stability index measures the stability of the air. (look into deeper if used)
// 
