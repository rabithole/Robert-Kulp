import React, { useState, useEffect } from 'react';
import styles from '../css/noaa.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

function Freezing(props) {
  
	return (
		<div id={styles.freezing}>
      		<section>
        		<p className={styles.sectionTitle}>Freezing Level</p>
            <div id={styles.rechart}>
            <LineChart 
              width={800} 
              height={400} 
              data={props.dayFreezeData.freezeValues}
              margin={{ left: 0}}
              wrapperStyle={'relative'}
            >
              <Line type='monotone' dataKey='alt' stroke='black' />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" stroke='black'/>
              <YAxis stroke='black'/>
            </LineChart>
            </div>
            
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