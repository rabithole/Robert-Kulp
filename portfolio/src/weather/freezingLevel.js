import React, { useState, useEffect } from 'react';
import styles from '../css/noaa.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// const style = {
//   fill: 'none',
//   sroke: 'black',
//   strokeWidth: 3
// }

function Freezing(props) {
  // console.log('Days', props.days, 'Hours', props.hours, 'Dates', props.dates, 'Freeze Values', props.freezeData)
  // console.log('Day Freeze Data: ', props.dayFreezeData.day, ' Freeze Level:', typeofprops.dayFreezeData.freeze)
  console.log(props.dayFreezeData.freezeValues)

  
  
  const data = [
  {day: 'Mon', alt: 400},
  {day: 'Tues', alt: 100},
  {day: 'Wed', alt: 2000},
  {day: 'Thurs', alt: 100},
  {day: 'Fri', alt: 500},
  {day: 'Sat', alt: 600},
  {day: 'Sun', alt: 5000}
  ]
  // console.log(data)
  
	return (
		<div id={styles.freezing}>
      		<section>
        		<p className={styles.sectionTitle}>Freezing Level</p>
            
            <LineChart width={900} height={400} data={props.dayFreezeData.freezeValues}>
              <Line type='monotone' dataKey='alt' stroke='black' />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
            </LineChart>
            
        		<p className={styles.sectionContent}>Current {props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;

// let weekday = '';


// <svg>
//               <polyline points="
//               15 , 110
//               140, 125 
//               250, 105 
//               350, 250 
//               460, 90 
//               570, 290 
//               670, 250 
//               770, 260
//               " 
//               fill={'none'} 
//               stroke={'black'} 
//               strokeWidth={5} />
//             </svg>

// <div id={styles.dayOfWeek}>
//               {props.days.map(day => {
//                   if(day !== weekday){
//                     weekday = day;
//                     return (
//                         <p id={styles.weekDay}>{day}</p>
//                     )
//                   }
//                 })
//               }
//             </div>