import React, { useState } from 'react';
import styles from '../css/noaa.module.css';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

// const style = {
//   fill: 'none',
//   sroke: 'black',
//   strokeWidth: 3
// }

function Freezing(props) {
  // console.log('Days', props.days, 'Hours', props.hours, 'Dates', props.dates, 'Freeze Values', props.freezeValues)
  // console.log('Day Freeze Data: ', props.dayFreezeData.day, ' Freeze Level:', typeofprops.dayFreezeData.freeze)

  const data = [];
  
  function freezeData() {
    let x = 0;  
    for(const property in props.dayFreezeData) {
      // console.log(`Freezing data::::: ${property}: ${props.dayFreezeData[property]}`)
        x = props.dayFreezeData.freeze;
        // console.log(props.dayFreezeData.day, props.dayFreezeData.freeze)
       console.log(x)
       return x;
    }
  }

  freezeData();

  
	return (
		<div id={styles.freezing}>
      		<section>
        		<p className={styles.sectionTitle}>Freezing Level</p>
            
            <LineChart width={800} height={300} data={data}>
              <Line type='monotone' dataKey='alt' stroke='black' />
              <XAxis dataKey='alt' />
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