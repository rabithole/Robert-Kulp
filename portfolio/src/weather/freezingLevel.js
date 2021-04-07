import React, { useState, useEffect } from 'react';
import styles from '../css/noaa.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';

function Freezing(props) {
  // console.log('Freeze Values', props.dayFreezeData.freezeValues)
  
	return (
		<div id={styles.freezing}>
      		<section>
        		<p className={styles.sectionTitle}>Freezing Level</p>
            <div id={styles.rechart}>
              <LineChart 
                width={1100} 
                height={400} 
                data={props.dayFreezeData.freezeValues}
                margin={{ left: 0}}
                wrapperStyle={'relative'}
              >

               <XAxis 
                  dataKey="day" 
                  stroke='black'
                  fontSize='1.5rem'
                  padding={{ left: 10, right: 10}}
                />
                <YAxis 
                  stroke='black'
                  fontSize='1.4rem'
                />

                <CartesianGrid 
                  stroke="#ccc"
                  strokeDasharray='1 5'
                />
               
                    <Line 
                      name='High'
                      type='monotone' 
                      dataKey='alt' 
                      stroke='turquoise'
                      strokeWidth='4'
                    >
                    </Line>

              </LineChart>
            </div>
            
        		<p className={styles.sectionContent}>Current {props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;