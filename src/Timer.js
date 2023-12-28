import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes , setMinutes] = useState(0);
  const [hour , setHour] = useState(0)  
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
     
    }
    return()=>clearInterval(interval)
  },[isActive]);

    if(seconds>59){
      setSeconds(0);
      setMinutes((prevMinutes)=>prevMinutes+1);
  }
  if(minutes>59){
      setMinutes(0);
      setHour((prevHour)=>prevHour+1);
  }
    
  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  }

  return (
    <div className='clock'>

      <h1>Timer: {hour<11?"0"+hour:hour}:{minutes<9? "0"+minutes:minutes}:{seconds<9 ? "0"+seconds:seconds}  </h1>
      <button className="start-btn" onClick={startTimer}>Start</button>
      <button className="stop-btn"onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;