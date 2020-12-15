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