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
              <Line 
                type='monotone' 
                dataKey='alt' 
                stroke='black'
                strokeWidth='5' 
              />
              <CartesianGrid 
                stroke="#ccc"
              />
              <XAxis 
                dataKey="day" 
                stroke='black'
                fontSize='1.5rem'
              />
              <YAxis 
                stroke='black'
                fontSize='1.4rem'
              />
            </LineChart>
            </div>
            
        		<p className={styles.sectionContent}>Current {props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;