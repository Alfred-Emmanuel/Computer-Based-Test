import React, { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
    const [timeLeft, setTimeLeft] = useState(600); // 2 hours in seconds

    const fiveMinutesLeft = timeLeft <= 300
  
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
      <div className={fiveMinutesLeft ? "breathing-timer" : ""}>
        <h1>{hours} Hour :{minutes} minutes :{seconds} seconds</h1>
      </div>
    );
  };

export default CountdownTimer;


  