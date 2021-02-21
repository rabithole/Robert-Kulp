import React, { useState } from 'react';
import styles from '../css/noaa.module.css';

// const style = {
//   fill: 'none',
//   sroke: 'black',
//   strokeWidth: 3
// }

function Freezing(props) {
  // console.log('Days', props.days, 'Hours', props.hours, 'Dates', props.dates, 'Freeze Values', props.freezeValues)

  // console.log(props.days)
  // setDayOfWeek(props.days)
  let weekday = '';

  
	return (
		<div id={styles.freezing}>
      		<section>
            <svg>
              <polyline points="15 , 20 140, 125 250, 105 350, 250 460, 90 570, 290 670, 250 770, 260" fill={'none'} stroke={'black'} strokeWidth={5} />
            </svg>

            <div id={styles.dayOfWeek}>
              {props.days.map(day => {
                  if(day !== weekday){
                    weekday = day;
                    return (
                        <p id={styles.weekDay}>{day}</p>
                    )
                  }
                  
                })
              }
            </div>
      			

        		<p className={styles.sectionTitle}>Freezing Level</p>
        		<p className={styles.sectionContent}>{props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;