// import dayjs from "dayjs";

// export function getRemainingTimeUntilMsTimestamp(timestampMs){

//     const timestampDayjs = dayjs(timestampMs)
//     const nowDayjs = dayjs()
//     return{
//         seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
//         minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
//         hours: getRemainingHours(nowDayjs, timestampDayjs)
//     }
// }

// function getRemainingSeconds(nowDayjs, timestampDayjs){
//     const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
//     return seconds
// }

// function getRemainingMinutes(nowDayjs, timestampDayjs){
//     const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
//     return minutes
// }

// function getRemainingHours(nowDayjs, timestampDayjs){
//     const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
//     return hours
// }

import React, { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
    const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

    const tenMinutesLeft = timeLeft <= 600
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (timeLeft === 0) {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [timeLeft]);
  
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
  
    return (
      <div className={tenMinutesLeft ? "breathing-timer" : ""}>
        <h1>{hours} Hour :{minutes} minutes :{seconds} seconds</h1>
      </div>
    );
  };

export default CountdownTimer;


  