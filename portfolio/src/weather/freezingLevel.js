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