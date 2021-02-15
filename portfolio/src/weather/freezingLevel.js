import React from 'react';
import styles from '../css/noaa.module.css';

const style = {
  fill: 'none',
  sroke: 'black',
  strokeWidth: 3
}

function Freezing(props) {
  // console.log('Days', props.days, 'Hours', props.hours, 'Dates', props.dates, 'Freeze Values', props.freezeValues)

  // console.log(props.days[6])
  
	return (
		<div id={styles.freezing}>
      		<section >
            {
              props.days.map(day => {
                let weekDay = 0
                if(weekDay === 0) {
                  console.log(day)
                  weekDay++
                }
                if (weekDay >= 1) {
                  weekDay = 0
                  console.log('next day')
                }
              })
            }
      			<svg>

              <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" fill={'none'} stroke={'black'} strokeWidth={5} />
      			</svg>
        		<p className={styles.sectionTitle}>Freezing Level</p>
        		<p className={styles.sectionContent}>{props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;