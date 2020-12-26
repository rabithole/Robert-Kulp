import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './location';
import Temperature from './temperature';
import Forecast from './forecast';
import Freezing from './freezingLevel';

function NoaaApp(props) {
  const [data, setData] = useState([]);
  // console.log('Data', data)


  useEffect(() => {
    let gridPoints = 'https://api.weather.gov/gridpoints/PQR/142,88'; // 0
    let forecast = 'https://api.weather.gov/gridpoints/PQR/142,88/forecast'; // 1
    let latest = 'https://api.weather.gov/stations/mhm66/observations/latest'; // 2
    let station = 'https://api.weather.gov/stations/mhm66'; // 3

    const gridPointsRequest = axios.get(gridPoints); // 0
    const forecastRequest = axios.get(forecast); // 1
    const latestRequest = axios.get(latest); // 2
    const stationRequest = axios.get(station); // 3

    // each endpoint is stored in an array and parsed with responses below. 
    // 0 is the grid points index
    // 1 is the forecast
    // 2 is the latest aka current info
    // 3 is the location name
    axios.all([gridPointsRequest, forecastRequest, latestRequest, stationRequest])
      .then(axios.spread((...responses) => {
        const elevation = responses[0].data.properties.elevation.value / 0.3048;
        const maxTemp = responses[0].data.properties.maxTemperature.values[0].value * 1.8 + 32;
        const minTemp = responses[0].data.properties.minTemperature.values[0].value * 1.8 + 32;
        const snowLevel = (responses[0].data.properties.snowLevel.values[0].value / 0.3048).toFixed(0);
        const snowFallAmount = responses[0].data.properties.snowfallAmount.values[3].value / 25.4;
        const probability = responses[0].data.properties.probabilityOfPrecipitation.values[3].value

        const forecast = responses[1].data.properties.periods[0].detailedForecast

        const currTemp = (responses[2].data.properties.temperature.value * 1.8 + 32).toFixed(0);
        const windSpeed = (responses[2].data.properties.windSpeed.value / 1.609).toFixed(0);
        const windGust = (responses[2].data.properties.windGust.value / 1.609).toFixed(0);
        const windChill = (responses[2].data.properties.windChill.value * 1.8 + 32).toFixed(0);
        // console.log('Precipitation', probability)

        const locationName = responses[3].data.properties.name;

        setData({
          ...data,
          elevation, maxTemp, minTemp, snowLevel, currTemp, locationName, forecast, windSpeed, windGust, windChill, snowFallAmount, probability
        })

      }))
      .catch(err => {
        console.log(err);
    })
  }, [data])
   

  
  
	return (
		<div>
      <Temperature 
        maxTemp={data.maxTemp}
        minTemp={data.minTemp}
        currTemp={data.currTemp}
      />

      <Freezing 
        snowLevel={data.snowLevel}
      />

      <div className='sideBySide'>
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